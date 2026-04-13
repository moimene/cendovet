import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, MessageSquare } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';

const contactSchema = z.object({
  name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres." }),
  email: z.string().email({ message: "Por favor, introduce un email válido." }),
  phone: z.string().optional(),
  subject: z.string().min(5, { message: "El asunto debe tener al menos 5 caracteres." }),
  message: z.string().min(10, { message: "El mensaje debe tener al menos 10 caracteres." }),
});

const ContactoPage = () => {
  const { toast } = useToast();
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data) => {
    const mailtoLink = `mailto:info@cvcampogibraltar.es?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(`Nombre: ${data.name}\nEmail: ${data.email}\nTeléfono: ${data.phone || 'No proporcionado'}\n\nMensaje:\n${data.message}`)}`;
    window.location.href = mailtoLink;
    
    toast({
      title: "¡Formulario listo para enviar!",
      description: "Tu cliente de correo se abrirá para que puedas enviar el mensaje.",
    });
    reset();
  };

  const openWhatsApp = () => {
    const phoneNumber = "34956 097 060"; // Número de CENDOVET
    const message = "Hola, me gustaría hacer una consulta.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      <Helmet>
        <title>Contacto - CENDOVET</title>
        <meta name="description" content="Contacta con CENDOVET para solicitar una cita, resolver dudas o visitarnos. Encuentra nuestro teléfono, email y dirección." />
      </Helmet>
      <div className="bg-white dark:bg-slate-900">
        {/* Hero */}
        <div className="relative isolate overflow-hidden bg-gradient-to-b from-cyan-800 to-cyan-900 pt-14 pb-24 sm:pb-32">
          <div className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white/5 dark:bg-cyan-950/30 shadow-xl shadow-cyan-600/10 ring-1 ring-cyan-50" />
          <div className="mx-auto container px-4 text-center">
            <motion.div
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Contacto</h1>
              <p className="mt-6 text-lg leading-8 text-cyan-200 max-w-2xl mx-auto">¿Tienes alguna duda o quieres pedir una cita? Estamos aquí para ayudarte.</p>
            </motion.div>
          </div>
        </div>

        <div className="container mx-auto px-4 -mt-16">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Formulario */}
            <div className="lg:col-span-2 bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-2xl">
              <h2 className="text-3xl font-bold text-cyan-900 dark:text-white mb-6">Envíanos un mensaje</h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Nombre</Label>
                    <Input id="name" {...register('name')} className={errors.name ? 'border-red-500' : ''} />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors?.name?.message as string}</p>}
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" {...register('email')} className={errors.email ? 'border-red-500' : ''} />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors?.email?.message as string}</p>}
                  </div>
                </div>
                <div>
                  <Label htmlFor="phone">Teléfono (Opcional)</Label>
                  <Input id="phone" type="tel" {...register('phone')} />
                </div>
                <div>
                  <Label htmlFor="subject">Asunto</Label>
                  <Input id="subject" {...register('subject')} className={errors.subject ? 'border-red-500' : ''} />
                  {errors.subject && <p className="text-red-500 text-sm mt-1">{errors?.subject?.message as string}</p>}
                </div>
                <div>
                  <Label htmlFor="message">Mensaje</Label>
                  <Textarea id="message" rows={5} {...register('message')} className={errors.message ? 'border-red-500' : ''} />
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors?.message?.message as string}</p>}
                </div>
                <div>
                  <Button type="submit" size="lg" className="w-full">
                    <Send className="mr-2 h-5 w-5" />
                    Enviar Mensaje
                  </Button>
                </div>
              </form>
            </div>

            {/* Info y WhatsApp */}
            <div className="space-y-8">
              <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-2xl">
                <h3 className="text-2xl font-bold text-cyan-900 dark:text-white mb-4">Información de Contacto</h3>
                <ul className="space-y-4 text-slate-600 dark:text-slate-300">
                  <li className="flex items-start">
                    <MapPin className="h-6 w-6 mr-3 mt-1 text-cyan-500 flex-shrink-0" />
                    <span>Av. Virgen de la Palma, 3, 11203 Algeciras, Cádiz</span>
                  </li>
                  <li className="flex items-center">
                    <Phone className="h-5 w-5 mr-3 text-cyan-500" />
                    <a href="tel:+34956 097 060" className="hover:text-cyan-500">956 097 060</a>
                  </li>
                  <li className="flex items-center">
                    <Mail className="h-5 w-5 mr-3 text-cyan-500" />
                    <a href="mailto:info@cvcampogibraltar.es" className="hover:text-cyan-500">info@cvcampogibraltar.es</a>
                  </li>
                </ul>
              </div>
              <div className="bg-green-500 text-white p-8 rounded-2xl shadow-2xl text-center">
                <h3 className="text-2xl font-bold mb-4">¿Prefieres WhatsApp?</h3>
                <p className="mb-6">Haz clic en el botón para iniciar una conversación con nosotros.</p>
                <Button
                  onClick={openWhatsApp}
                  size="lg"
                  className="w-full bg-white text-green-600 hover:bg-green-100"
                >
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Chatear por WhatsApp
                </Button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mapa */}
        <div className="py-16 sm:py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-cyan-900 dark:text-white mb-8">Encuéntranos</h2>
            <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=-5.4530,36.1335,-5.4430,36.1385&layer=mapnik&marker=36.1360,-5.4480"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de ubicación de CENDOVET"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactoPage;
