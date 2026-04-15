import React from 'react';
import SEOHead from '@/components/SEOHead';
import { seoData } from '@/data/seoData';
import { breadcrumbSchema } from '@/data/schemaData';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { HeartHandshake as Handshake, Microscope, Scan, Zap, Radio, HeartPulse, FileText, CheckCircle2, Clock, ArrowRight, UserCheck, MessageSquare, Send } from 'lucide-react';

const FeatureCard = ({ icon, title, description, link }) => (
  <motion.div
    whileHover={{ y: -5, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' }}
    className="bg-white p-6 rounded-lg shadow-md h-full flex flex-col"
  >
    <div className="flex-shrink-0">{icon}</div>
    <h3 className="text-xl font-bold text-slate-800 mt-4">{title}</h3>
    <p className="text-slate-600 mt-2 flex-grow">{description}</p>
    <Link to={link} className="text-teal-600 hover:text-teal-700 font-semibold mt-4 inline-flex items-center">
      Saber más <ArrowRight className="ml-2 h-4 w-4" />
    </Link>
  </motion.div>
);

const StepCard = ({ icon, title, description }) => (
  <div className="text-center">
    <div className="mx-auto bg-teal-100 text-teal-600 rounded-full h-16 w-16 flex items-center justify-center">
      {icon}
    </div>
    <h3 className="text-lg font-bold text-slate-800 mt-4">{title}</h3>
    <p className="text-slate-600 mt-1">{description}</p>
  </div>
);

const AdvantageCard = ({ icon, title, description }) => (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <div className="mx-auto bg-teal-50 text-teal-600 rounded-full h-12 w-12 flex items-center justify-center">
            {icon}
        </div>
        <h3 className="text-lg font-semibold text-slate-800 mt-4">{title}</h3>
        <p className="text-slate-500 mt-1 text-sm">{description}</p>
    </div>
);

const ParaClinicasPage = () => {
  const specialties = [
    { icon: <Microscope className="h-8 w-8 text-teal-600" />, title: "Cirugía Laparoscópica", description: "Esterilizaciones, biopsias, gastropexias preventivas, exploración abdominal.", link: "/servicios/laparoscopia" },
    { icon: <Scan className="h-8 w-8 text-teal-600" />, title: "Endoscopia Flexible y Rígida", description: "Rinoscopia, broncoscopia, gastroscopia, colonoscopia, otoscopia.", link: "/servicios/endoscopia" },
    { icon: <Zap className="h-8 w-8 text-teal-600" />, title: "Litotricia Láser Intracorpórea", description: "Fragmentación de cálculos urinarios sin cirugía abierta.", link: "/servicios/litotricia-laser" },
    { icon: <Radio className="h-8 w-8 text-teal-600" />, title: "Fluoroscopia Digital", description: "Procedimientos guiados por imagen en tiempo real para máxima precisión.", link: "/servicios/fluoroscopia" },
    { icon: <HeartPulse className="h-8 w-8 text-teal-600" />, title: "Cardiología Especializada", description: "Ecocardiografía Doppler, ECG y evaluación cardiovascular completa.", link: "/servicios/cardiologia" },
    { icon: <FileText className="h-8 w-8 text-teal-600" />, title: "Ecografía Abdominal Avanzada", description: "Diagnóstico por imagen especializado y toma de muestras ecoguiadas.", link: "/servicios/ecografia" },
  ];
  
  const advantages = [
      { icon: <Microscope size={24} />, title: "Equipamiento Avanzado", description: "Acceso a tecnología MIS que tu clínica puede no tener disponible." },
      { icon: <CheckCircle2 size={24} />, title: "Especialista Acreditada", description: "Dra. Eva García Gato, pionera en MIS con 15+ años de experiencia." },
      { icon: <Clock size={24} />, title: "Respuesta Rápida", description: "Confirmación del caso y planificación en menos de 24 horas." },
      { icon: <Handshake size={24} />, title: "Colaboración Ética", description: "El cliente es y será siempre del veterinario remitente. Garantizado." },
      { icon: <FileText size={24} />, title: "Informe Completo", description: "Documentación detallada del procedimiento y recomendaciones." },
      { icon: <HeartPulse size={24} />, title: "Comunicación Fluida", description: "Mantenemos informado al veterinario en cada fase del proceso." },
  ];

  return (
    <>
      <SEOHead
        {...seoData.para_clinicas}
        jsonLd={[
          breadcrumbSchema([
            { name: 'Inicio', url: 'https://cendovet.lovable.app/' },
            { name: 'Para Clínicas', url: 'https://cendovet.lovable.app/para-clinicas' }
          ])
        ]}
      />
      
      <div className="bg-slate-50">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-b from-teal-700 to-teal-800 text-white overflow-hidden">
             <div className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white/5  shadow-xl shadow-teal-600/10 ring-1 ring-teal-50" />
            <div className="container mx-auto px-4 py-20 md:py-32 text-center">
                <motion.div
                    initial={{ opacity: 1, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 bg-teal-500/10 text-teal-700 rounded-full px-4 py-1 mb-4">
                        <Handshake size={16} />
                        <span className="font-semibold">B2B - Veterinarios</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">Para Clínicas Veterinarias</h1>
                    <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-teal-100">
                        CENDOVET actúa como centro de referencia en España para técnicas de mínima invasión. Si eres veterinario y necesitas apoyo en un caso complejo, estamos para ayudarte.
                    </p>
                </motion.div>
            </div>
        </div>

        {/* Especialidades Section */}
        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Especialidades Disponibles para Derivación</h2>
                    <p className="mt-3 text-lg text-slate-600 max-w-2xl mx-auto">Procedimientos avanzados que podemos realizar para tus pacientes, ampliando tu cartera de servicios.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {specialties.map(spec => <FeatureCard key={spec.title} {...spec} />)}
                </div>
            </div>
        </section>

        {/* Proceso de Colaboración */}
        <section className="bg-white py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Proceso de Colaboración Sencillo y Transparente</h2>
                    <p className="mt-3 text-lg text-slate-600">Trabajamos contigo, no contra ti. Nuestra filosofía es ser una extensión de tu propia clínica.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    <StepCard icon={<Send size={28} />} title="1. Contacta con Nosotros" description="Envía el caso mediante nuestro formulario o llámanos. Te asesoramos sin compromiso." />
                    <StepCard icon={<Microscope size={28} />} title="2. Realizamos el Procedimiento" description="Ejecutamos la técnica MIS solicitada con equipamiento de última generación." />
                    <StepCard icon={<FileText size={28} />} title="3. Informe Detallado" description="Recibes un informe completo para que continúes el seguimiento en tu clínica." />
                    <StepCard icon={<UserCheck size={28} />} title="4. El Paciente Vuelve a Ti" description="Tu cliente sigue siendo tuyo. Actuamos como un servicio de apoyo especializado." />
                </div>
            </div>
        </section>

        {/* Ventajas Section */}
        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Ventajas de Referir a CENDOVET</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {advantages.map(adv => (
                         <motion.div
                            key={adv.title}
                            initial={{ opacity: 1, y: 0 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.5 }}
                         >
                            <AdvantageCard {...adv} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

        {/* Final CTA */}
        <section className="bg-white">
             <div className="container mx-auto px-4">
                <div className="bg-gradient-to-r from-teal-600 to-teal-500 rounded-lg shadow-xl p-8 md:p-12 my-16 text-white text-center">
                    <h2 className="text-3xl md:text-4xl font-bold">¿Tienes un caso para derivar?</h2>
                    <p className="mt-3 max-w-2xl mx-auto text-teal-50">Completa nuestro formulario de derivación online y nuestro equipo se pondrá en contacto contigo para coordinar todos los detalles.</p>
                    <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
                        <Button asChild size="lg" className="bg-white text-teal-700 hover:bg-teal-50 font-bold shadow-md">
                            <Link to="/para-clinicas/referir-caso">
                                Referir un Caso <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-slate-800">
                            <Link to="/contacto">Contactar Directamente</Link>
                        </Button>
                    </div>
                    <p className="mt-6 text-sm text-teal-100 font-semibold">Garantía: Respuesta confirmada en menos de 24 horas.</p>
                </div>
            </div>
        </section>

      </div>
    </>
  );
};

export default ParaClinicasPage;
