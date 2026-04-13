import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { User, PawPrint, Stethoscope, ShieldCheck, ArrowLeft, ArrowRight, Upload, File as FileIcon, X, CheckCircle2, Phone, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/components/ui/use-toast';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB
const ALLOWED_FILE_TYPES = ['application/pdf', 'image/jpeg', 'image/png', 'image/jpg', 'video/mp4'];

// Zod Schemas
const step1Schema = z.object({
  vetName: z.string().min(3, "Mínimo 3 caracteres").max(100),
  clinicName: z.string().min(2, "Mínimo 2 caracteres").max(100),
  location: z.string().min(2, "Mínimo 2 caracteres").max(100),
  phone: z.string().regex(/^[0-9]{9,15}$/, "Debe ser un número de teléfono válido"),
  email: z.string().email("Debe ser un email válido").max(255),
});

const step2Schema = z.object({
  ownerName: z.string().min(2, "Mínimo 2 caracteres").max(100),
  ownerContact: z.string().max(255).optional().or(z.literal('')),
  petName: z.string().min(1, "El nombre es obligatorio").max(50),
  species: z.string().min(2, "Mínimo 2 caracteres").max(100),
  age: z.coerce.number().min(0, "La edad no puede ser negativa").max(50, "La edad parece demasiado alta"),
  weight: z.coerce.number().min(0).max(200).optional().or(z.literal('')),
});

const step3Schema = z.object({
  clinicalSummary: z.string().min(20, "Mínimo 20 caracteres").max(5000),
  servicesRequested: z.string().max(500).optional().or(z.literal('')),
  keepInformed: z.boolean().default(false),
  contactOwner: z.boolean().default(false),
});

const fullSchema = step1Schema.merge(step2Schema).merge(step3Schema);

// Step Components
const Step1Form = ({ register, errors }) => (
    <motion.div initial={{ opacity: 1 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <h2 className="text-2xl font-bold text-cyan-900 dark:text-white mb-6">Datos del Veterinario/Clínica</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-1"><Label htmlFor="vetName">Nombre del veterinario remitente *</Label><Input id="vetName" placeholder="Dr./Dra. Nombre Apellidos" {...register("vetName")} /><p className="text-red-500 text-xs">{errors.vetName?.message}</p></div>
            <div className="space-y-1"><Label htmlFor="clinicName">Clínica de origen *</Label><Input id="clinicName" placeholder="Nombre de la clínica veterinaria" {...register("clinicName")} /><p className="text-red-500 text-xs">{errors.clinicName?.message}</p></div>
            <div className="space-y-1"><Label htmlFor="location">Localidad/Provincia *</Label><Input id="location" placeholder="Ciudad, Provincia" {...register("location")} /><p className="text-red-500 text-xs">{errors.location?.message}</p></div>
            <div className="space-y-1"><Label htmlFor="phone">Teléfono de contacto *</Label><Input id="phone" type="tel" placeholder="XXX XXX XXX" {...register("phone")} /><p className="text-red-500 text-xs">{errors.phone?.message}</p></div>
            <div className="sm:col-span-2 space-y-1"><Label htmlFor="email">Email de contacto *</Label><Input id="email" type="email" placeholder="contacto@clinica.com" {...register("email")} /><p className="text-red-500 text-xs">{errors.email?.message}</p></div>
        </div>
    </motion.div>
);

const Step2Form = ({ register, errors }) => (
    <motion.div initial={{ opacity: 1 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <h2 className="text-2xl font-bold text-cyan-900 dark:text-white mb-6">Datos del Propietario y Mascota</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="sm:col-span-2 space-y-1"><Label htmlFor="ownerName">Nombre del propietario *</Label><Input id="ownerName" placeholder="Nombre completo del propietario" {...register("ownerName")} /><p className="text-red-500 text-xs">{errors.ownerName?.message}</p></div>
            <div className="sm:col-span-2 space-y-1"><Label htmlFor="ownerContact">Teléfono/Email del propietario (Opcional)</Label><Input id="ownerContact" placeholder="Contacto del propietario" {...register("ownerContact")} /><p className="text-red-500 text-xs">{errors.ownerContact?.message}</p></div>
            <div className="sm:col-span-2 space-y-1"><Label htmlFor="petName">Nombre de la mascota *</Label><Input id="petName" placeholder="Nombre del animal" {...register("petName")} /><p className="text-red-500 text-xs">{errors.petName?.message}</p></div>
            <div className="space-y-1"><Label htmlFor="species">Especie y raza *</Label><Input id="species" placeholder="Ej: Perro - Pastor Alemán" {...register("species")} /><p className="text-red-500 text-xs">{errors.species?.message}</p></div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1"><Label htmlFor="age">Edad (años) *</Label><Input id="age" type="number" placeholder="Años" {...register("age")} /><p className="text-red-500 text-xs">{errors.age?.message}</p></div>
              <div className="space-y-1"><Label htmlFor="weight">Peso (kg)</Label><Input id="weight" type="number" step="0.1" placeholder="Kg" {...register("weight")} /><p className="text-red-500 text-xs">{errors.weight?.message}</p></div>
            </div>
        </div>
    </motion.div>
);

const Step3Form = ({ register, errors, uploadedFiles, setUploadedFiles }) => {
    const { toast } = useToast();

    const handleFileChange = (event) => {
        const files = Array.from(event.target.files);
        processFiles(files);
    };

    const handleDrop = (event) => {
        event.preventDefault();
        event.stopPropagation();
        const files = Array.from(event.dataTransfer.files);
        processFiles(files);
    };

    const processFiles = (files) => {
        const newFiles = files.filter(file => {
            if (file.size > MAX_FILE_SIZE) {
                toast({ variant: "destructive", title: "Archivo demasiado grande", description: `${file.name} excede los 50MB.` });
                return false;
            }
            if (!ALLOWED_FILE_TYPES.includes(file.type)) {
                toast({ variant: "destructive", title: "Tipo de archivo no permitido", description: `${file.name} no es un tipo de archivo válido.` });
                return false;
            }
            return true;
        });
        setUploadedFiles(prev => [...prev, ...newFiles]);
    };

    const removeFile = (index) => {
        setUploadedFiles(prev => prev.filter((_, i) => i !== index));
    };

    return (
        <motion.div initial={{ opacity: 1 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <h2 className="text-2xl font-bold text-cyan-900 dark:text-white mb-6">Detalles Clínicos del Caso</h2>
            <div className="space-y-6">
                <div className="space-y-1">
                    <Label htmlFor="clinicalSummary">Resumen clínico del caso *</Label>
                    <Textarea id="clinicalSummary" rows={6} placeholder="Incluya diagnóstico presuntivo, resultados relevantes, tratamientos previos..." {...register("clinicalSummary")} />
                    <p className="text-xs text-slate-500">Incluya resultados relevantes (analíticas, radiografías, etc.)</p>
                    <p className="text-red-500 text-xs">{errors.clinicalSummary?.message}</p>
                </div>
                <div className="space-y-1">
                    <Label htmlFor="servicesRequested">Servicios solicitados (Opcional)</Label>
                    <Input id="servicesRequested" placeholder="Ej: Endoscopia diagnóstica, Cirugía laparoscópica..." {...register("servicesRequested")} />
                    <p className="text-red-500 text-xs">{errors.servicesRequested?.message}</p>
                </div>
                <div>
                    <Label>Adjuntar archivos clínicos (Opcional)</Label>
                    <div
                        onDrop={handleDrop}
                        onDragOver={(e) => e.preventDefault()}
                        className="mt-2 flex justify-center rounded-lg border border-dashed border-slate-900/25 dark:border-slate-50/25 px-6 py-10"
                    >
                        <div className="text-center">
                            <Upload className="mx-auto h-12 w-12 text-gray-400" />
                            <div className="mt-4 flex text-sm leading-6 text-gray-600 dark:text-gray-300">
                                <label htmlFor="file-upload" className="relative cursor-pointer rounded-md bg-white dark:bg-slate-800 font-semibold text-cyan-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-cyan-600 focus-within:ring-offset-2 dark:focus-within:ring-offset-slate-800 hover:text-cyan-500">
                                    <span>Seleccionar archivos</span>
                                    <input id="file-upload" name="file-upload" type="file" className="sr-only" multiple onChange={handleFileChange} />
                                </label>
                                <p className="pl-1">o arrástralos aquí</p>
                            </div>
                            <p className="text-xs leading-5 text-gray-600 dark:text-gray-400">PDF, JPG, PNG, MP4 hasta 50MB</p>
                        </div>
                    </div>
                    {uploadedFiles.length > 0 && (
                        <div className="mt-4 space-y-2">
                            {uploadedFiles.map((file, index) => (
                                <div key={index} className="flex items-center justify-between bg-slate-100 dark:bg-slate-700 p-2 rounded-md">
                                    <div className="flex items-center gap-2">
                                        <FileIcon className="h-5 w-5 text-slate-500" />
                                        <span className="text-sm font-medium text-slate-800 dark:text-slate-200">{file.name}</span>
                                        <span className="text-xs text-slate-500">{(file.size / 1024 / 1024).toFixed(2)} MB</span>
                                    </div>
                                    <Button variant="ghost" size="icon" onClick={() => removeFile(index)}><X className="h-4 w-4" /></Button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <div>
                  <h3 className="text-md font-semibold text-cyan-900 dark:text-white mb-2">Preferencias de comunicación</h3>
                  <div className="flex items-center space-x-2">
                      <Checkbox id="keepInformed" {...register("keepInformed")} />
                      <Label htmlFor="keepInformed">Mantenerme informado del progreso del caso</Label>
                  </div>
                  <div className="flex items-center space-x-2 mt-2">
                      <Checkbox id="contactOwner" {...register("contactOwner")} />
                      <Label htmlFor="contactOwner">Contactar directamente al propietario para la cita</Label>
                  </div>
                </div>
            </div>
        </motion.div>
    );
};

const Step4Review = ({ getValues, uploadedFiles }) => {
    const formData = getValues();
    return (
        <motion.div initial={{ opacity: 1 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <h2 className="text-2xl font-bold text-cyan-900 dark:text-white mb-2">Revise su información antes de enviar</h2>
            <p className="text-slate-600 dark:text-slate-300 mb-6">Puede volver atrás para modificar cualquier información.</p>
            <div className="space-y-4">
                <div className="bg-slate-50 dark:bg-slate-700/50 p-4 rounded-lg">
                    <h3 className="font-bold text-lg text-cyan-800 dark:text-cyan-300 mb-2">Información del Veterinario</h3>
                    <p><strong>Veterinario:</strong> {formData.vetName}</p>
                    <p><strong>Clínica:</strong> {formData.clinicName}</p>
                    <p><strong>Localidad:</strong> {formData.location}</p>
                    <p><strong>Teléfono:</strong> {formData.phone}</p>
                    <p><strong>Email:</strong> {formData.email}</p>
                </div>
                 <div className="bg-slate-50 dark:bg-slate-700/50 p-4 rounded-lg">
                    <h3 className="font-bold text-lg text-cyan-800 dark:text-cyan-300 mb-2">Información del Paciente</h3>
                    <p><strong>Propietario:</strong> {formData.ownerName}</p>
                    {formData.ownerContact && <p><strong>Contacto Prop.:</strong> {formData.ownerContact}</p>}
                    <p><strong>Mascota:</strong> {formData.petName}</p>
                    <p><strong>Especie/Raza:</strong> {formData.species}</p>
                    <p><strong>Edad:</strong> {formData.age} años</p>
                    {formData.weight && <p><strong>Peso:</strong> {formData.weight} kg</p>}
                </div>
                 <div className="bg-slate-50 dark:bg-slate-700/50 p-4 rounded-lg">
                    <h3 className="font-bold text-lg text-cyan-800 dark:text-cyan-300 mb-2">Información Clínica</h3>
                    <p className="whitespace-pre-wrap"><strong>Resumen:</strong> {formData.clinicalSummary}</p>
                    {formData.servicesRequested && <p><strong>Servicios:</strong> {formData.servicesRequested}</p>}
                    <p><strong>Archivos Adjuntos:</strong> {uploadedFiles.length} archivo(s)</p>
                </div>
            </div>
        </motion.div>
    );
};

const SuccessScreen = ({ onReset }) => (
    <motion.div initial={{ opacity: 1, scale: 1 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-10">
        <CheckCircle2 className="mx-auto h-20 w-20 text-green-500" />
        <h2 className="mt-4 text-3xl font-bold text-cyan-900 dark:text-white">¡Gracias! Hemos recibido la información del caso</h2>
        <p className="mt-2 text-slate-600 dark:text-slate-300">Nos pondremos en contacto en menos de 24h para confirmar los detalles.</p>
        <div className="mt-6 bg-cyan-50 dark:bg-cyan-900/50 border-l-4 border-cyan-500 p-4 text-left">
            <p className="font-bold text-cyan-800 dark:text-cyan-200">Respuesta garantizada en menos de 24 horas</p>
            <p className="text-sm text-cyan-700 dark:text-cyan-300">Si necesita atención inmediata, llámenos al <a href="tel:+34956097060" className="font-bold underline">956 097 060</a></p>
        </div>
        <Button onClick={onReset} className="mt-8">Referir otro caso</Button>
    </motion.div>
);

const stepsConfig = [
  { id: 1, name: 'Veterinario', icon: <User className="h-5 w-5" />, fields: ['vetName', 'clinicName', 'location', 'phone', 'email'] },
  { id: 2, name: 'Paciente', icon: <PawPrint className="h-5 w-5" />, fields: ['ownerName', 'ownerContact', 'petName', 'species', 'age', 'weight'] },
  { id: 3, name: 'Clínica', icon: <Stethoscope className="h-5 w-5" />, fields: ['clinicalSummary', 'servicesRequested', 'keepInformed', 'contactOwner'] },
  { id: 4, name: 'Revisión', icon: <ShieldCheck className="h-5 w-5" /> },
];


const ReferirCasoPage = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [consent, setConsent] = useState(false);
    const { toast } = useToast();
    
    const { register, trigger, getValues, formState: { errors }, reset } = useForm({
        resolver: zodResolver(fullSchema),
        mode: "onBlur"
    });

    const handleNext = async () => {
        const fields = stepsConfig[currentStep - 1].fields;
        const output = await trigger(fields, { shouldFocus: true });
        if (!output) return;

        if (currentStep < 4) {
            setCurrentStep(step => step + 1);
        }
    };

    const handlePrev = () => {
        if (currentStep > 1) {
            setCurrentStep(step => step - 1);
        }
    };

    const handleSubmit = async () => {
        if (!consent) {
            toast({ variant: "destructive", title: "Consentimiento requerido", description: "Debe aceptar la política de privacidad." });
            return;
        }

        const output = await trigger();
        if(!output) {
          toast({ variant: "destructive", title: "Error de validación", description: "Por favor, revise los campos marcados en rojo en los pasos anteriores." });
          return;
        }

        setIsSubmitting(true);
        try {
            const formData = getValues();
            const mailtoLink = `mailto:info@cvcampogibraltar.es?subject=${encodeURIComponent(`Referencia de caso - ${formData.petName} (${formData.species})`)}&body=${encodeURIComponent(`DATOS DEL VETERINARIO\nNombre: ${formData.vetName}\nClínica: ${formData.clinicName}\nLocalidad: ${formData.location}\nTeléfono: ${formData.phone}\nEmail: ${formData.email}\n\nDATOS DEL PROPIETARIO Y MASCOTA\nPropietario: ${formData.ownerName}\nContacto propietario: ${formData.ownerContact || 'No proporcionado'}\nMascota: ${formData.petName}\nEspecie/Raza: ${formData.species}\nEdad: ${formData.age} años\nPeso: ${formData.weight || 'No proporcionado'} kg\n\nDETALLES CLÍNICOS\n${formData.clinicalSummary}\n\nServicios solicitados: ${formData.servicesRequested || 'No especificado'}`)}`;
            window.location.href = mailtoLink;
            setSubmitted(true);

        } catch (error: any) {
            toast({ variant: "destructive", title: "Error al enviar", description: error.message });
        } finally {
            setIsSubmitting(false);
        }
    };
    
    const resetForm = () => {
        reset();
        setUploadedFiles([]);
        setConsent(false);
        setCurrentStep(1);
        setSubmitted(false);
    }
    
    return (
        <>
            <Helmet><title>Referir un Caso - CENDOVET</title><meta name="description" content="Formulario para que clínicas veterinarias refieran un caso a CENDOVET." /></Helmet>
            <div className="bg-slate-50 dark:bg-slate-900 py-16 sm:py-24">
                <div className="container mx-auto px-4">
                    <AnimatePresence mode="wait">
                    {submitted ? (
                        <SuccessScreen key="success" onReset={resetForm} />
                    ) : (
                        <motion.div key="form">
                            <div className="text-center mb-12"><h1 className="text-4xl md:text-5xl font-extrabold text-cyan-900 dark:text-white">Referir un Caso a CENDOVET</h1><p className="mt-4 text-lg text-slate-600 dark:text-slate-300">Respuesta garantizada en menos de 24 horas.</p></div>
                            <div className="max-w-4xl mx-auto">
                                <div className="mb-8 flex justify-between items-center">
                                    {stepsConfig.map((step, index) => (
                                        <React.Fragment key={step.id}>
                                            <div className="flex flex-col items-center">
                                                <div className={cn("flex items-center justify-center w-10 h-10 rounded-full lg:h-12 lg:w-12 shrink-0 transition-colors", currentStep > step.id ? 'bg-green-500 text-white' : currentStep === step.id ? 'bg-cyan-600 text-white' : 'bg-cyan-100 dark:bg-slate-700 text-cyan-600 dark:text-cyan-300')}>
                                                    {currentStep > step.id ? <CheckCircle2 className="h-5 w-5"/> : step.icon}
                                                </div>
                                                <p className="text-xs mt-2 font-semibold">{step.name}</p>
                                            </div>
                                            {index < stepsConfig.length - 1 && <div className={cn("flex-auto border-t-2 transition-colors", currentStep > index + 1 ? "border-green-500" : "border-cyan-200 dark:border-slate-700")}></div>}
                                        </React.Fragment>
                                    ))}
                                </div>
                                <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg">
                                    <AnimatePresence mode="wait">
                                        {currentStep === 1 && <Step1Form register={register} errors={errors} />}
                                        {currentStep === 2 && <Step2Form register={register} errors={errors} />}
                                        {currentStep === 3 && <Step3Form register={register} errors={errors} uploadedFiles={uploadedFiles} setUploadedFiles={setUploadedFiles}/>}
                                        {currentStep === 4 && <Step4Review getValues={getValues} uploadedFiles={uploadedFiles} />}
                                    </AnimatePresence>
                                    {currentStep === 4 && (
                                        <div className="mt-6 p-4 rounded-lg bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600">
                                            <div className="flex items-start space-x-3">
                                                <Checkbox id="consent" checked={consent} onCheckedChange={(checked) => setConsent(checked === true)} />
                                                <Label htmlFor="consent" className="text-sm">He leído y acepto la <Link to="/politica-privacidad" target="_blank" className="text-cyan-600 hover:underline">política de privacidad</Link>. Confirmo que tengo el consentimiento del propietario para compartir estos datos con CENDOVET.</Label>
                                            </div>
                                        </div>
                                    )}
                                    <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700 flex justify-between">
                                        <Button variant="outline" onClick={handlePrev} disabled={currentStep === 1 || isSubmitting}><ArrowLeft className="h-4 w-4 mr-2"/>Anterior</Button>
                                        {currentStep < 4 ? (
                                            <Button onClick={handleNext} disabled={isSubmitting}>Siguiente<ArrowRight className="h-4 w-4 ml-2"/></Button>
                                        ) : (
                                            <Button onClick={handleSubmit} disabled={isSubmitting || !consent}>{isSubmitting ? <><Loader2 className="mr-2 h-4 w-4 animate-spin"/>Enviando...</> : "Enviar caso a CENDOVET"}</Button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                    </AnimatePresence>
                </div>
            </div>
        </>
    );
};

export default ReferirCasoPage;