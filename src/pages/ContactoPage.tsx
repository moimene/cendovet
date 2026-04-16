import React from 'react';
import SEOHead from '@/components/SEOHead';
import { seoData } from '@/data/seoData';
import { organizationSchema, breadcrumbSchema } from '@/data/schemaData';
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
      <SEOHead
        {...seoData.contacto}
        jsonLd={[
          organizationSchema,
          breadcrumbSchema([
            { name: 'Inicio', url: 'https://cendovet.lovable.app/' },
            { name: 'Contacto', url: 'https://cendovet.lovable.app/contacto' }
          ])
        ]}
      />
      <div className="bg-white">
        {/* Hero */}
        <div className="relative isolate overflow-hidden bg-teal-800 pt-14 pb-24 sm:pb-32">
          <div className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white/5 shadow-xl shadow-teal-600/10 ring-1 ring-teal-50" />
          <div className="mx-auto container px-4 text-center">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Contacto</h1>
              <p className="mt-6 text-lg leading-8 text-teal-100 max-w-2xl mx-auto">¿Tienes alguna duda o quieres pedir una cita? Estamos aquí para ayudarte.</p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 -mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Formulario */}
            <div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-2xl">
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Envíanos un mensaje</h2>
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
              <div className="bg-white p-8 rounded-2xl shadow-2xl">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Información de Contacto</h3>
                <ul className="space-y-4 text-slate-600">
                  <li className="flex items-start">
                    <MapPin className="h-6 w-6 mr-3 mt-1 text-teal-500 flex-shrink-0" />
                    <span>Av. Virgen de la Palma, 3, 11203 Algeciras, Cádiz</span>
                  </li>
                  <li className="flex items-center">
                    <Phone className="h-5 w-5 mr-3 text-teal-500" />
                    <a href="tel:+34956 097 060" className="hover:text-teal-500">956 097 060</a>
                  </li>
                  <li className="flex items-center">
                    <Mail className="h-5 w-5 mr-3 text-teal-500" />
                    <a href="mailto:info@cvcampogibraltar.es" className="hover:text-teal-500">info@cvcampogibraltar.es</a>
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
          </div>
        </div>

        {/* Mapa */}
        <div className="py-16 sm:py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-8">Encuéntranos</h2>
            <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d812.5!2d-5.4536!3d36.1313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0c9a5e0b2a5c37%3A0x4e3f5c1a8b7e2d9f!2sAv.%20Virgen%20de%20la%20Palma%2C%203%2C%2011203%20Algeciras%2C%20C%C3%A1diz!5e0!3m2!1ses!2ses!4v1700000000000!5m2!1ses!2ses"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de ubicación de CENDOVET - Av. Virgen de la Palma, 3, 11203 Algeciras, Cádiz"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactoPage;
