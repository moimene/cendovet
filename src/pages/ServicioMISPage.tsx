import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { servicesData } from '@/data/servicesData';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import RelatedCases from '@/components/RelatedCases';

const Section = ({ children, className = '' }) => (
  <motion.section 
    className={`py-16 sm:py-20 ${className}`}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6 }}
  >
    <div className="container mx-auto px-4">{children}</div>
  </motion.section>
);

const ServicioMISPage = () => {
  const { serviceKey } = useParams();
  const navigate = useNavigate();
  const service = servicesData[serviceKey];
  const lang = 'es'; // For now, hardcoded. Later this will come from a language context.
  const content = service?.[lang];

  if (!content || !content.badge) { 
    const placeholderTitle = service?.es?.title || service?.en?.title || "Servicio no encontrado";
     return (
        <div className="flex flex-col items-center justify-center text-center py-20 md:py-32 px-4 bg-gray-50 dark:bg-slate-900">
            <Helmet>
              <title>{placeholderTitle} - Próximamente - CENDOVET</title>
              <meta name="description" content={`Información sobre ${placeholderTitle} estará disponible pronto.`} />
            </Helmet>
            <h1 className="text-4xl md:text-5xl font-bold text-cyan-900 dark:text-cyan-400 mb-4">{placeholderTitle}</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mb-8">
                ¡Estamos trabajando en el contenido de esta sección! Muy pronto encontrarás aquí toda la información detallada.
            </p>
            <div className="flex gap-4">
                <Button asChild>
                    <Link to="/">Volver a Inicio</Link>
                </Button>
                <Button variant="outline" asChild>
                    <Link to="/contacto">Contactar</Link>
                </Button>
            </div>
        </div>
    );
  }
  
  const serviceTagMapping = {
      'laparoscopia': 'Laparoscopia',
      'endoscopia': 'Endoscopia',
      'litotricia-laser': 'Litotricia Láser',
      'fluoroscopia': 'Fluoroscopia',
      'cardiologia': 'Cardiología',
      'ecografia': 'Ecografía',
      'medicina-felina': 'Medicina Felina',
  }

  const relatedCasesTag = serviceTagMapping[serviceKey] || '';

  const getImageForService = (key) => {
    switch(key) {
        case 'laparoscopia':
            return {
                src: "https://images.unsplash.com/photo-1579684288599-e6b7e7a940ad",
                alt: "Cirujana veterinaria realizando una laparoscopia"
            };
        case 'endoscopia':
            return {
                src: "https://images.unsplash.com/photo-1454017158274-a1239577f5c3",
                alt: "Veterinaria realizando una endoscopia a un perro"
            };
        case 'litotricia-laser':
            return {
                src: "https://images.unsplash.com/photo-1581093450021-4a7360e9a1c8",
                alt: "Equipo láser avanzado en un laboratorio médico"
            };
        case 'fluoroscopia':
             return {
                src: "https://images.unsplash.com/photo-1579154341191-c8a452778015",
                alt: "Equipo de fluoroscopia digital en un quirofano veterinario"
            };
        case 'cardiologia':
            return {
                src: "https://images.unsplash.com/photo-1526284686417-e343398c8b4e",
                alt: "Veterinario realizando una ecocardiografía a un perro"
            };
        case 'ecografia':
            return {
                src: "https://images.unsplash.com/photo-1581093450021-4a7360e9a1c8",
                alt: "Veterinario realizando una ecografía abdominal avanzada"
            };
        case 'medicina-felina':
            return {
                src: "https://images.unsplash.com/photo-1574158622682-e40e6984100d",
                alt: "Gato de aspecto saludable siendo examinado"
            };
        default:
            return {
                src: "https://images.unsplash.com/photo-1517478292-6643e6a62cfe",
                alt: "Equipo médico veterinario de alta tecnología"
            };
    }
  }

  const serviceImage = getImageForService(serviceKey);
  const processImage = "https://images.unsplash.com/photo-1691935153114-25b39411e7e3";


  return (
    <>
      <Helmet>
        <title>{content.title} - CENDOVET</title>
        <meta name="description" content={content.subtitle} />
      </Helmet>

      <div className="bg-white dark:bg-slate-900">
        {/* Hero */}
        <div className="relative isolate overflow-hidden bg-gradient-to-b from-cyan-800 to-cyan-900 pt-14">
           <div className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white/5 dark:bg-cyan-950/30 shadow-xl shadow-cyan-600/10 ring-1 ring-cyan-50" />
           <div className="mx-auto container px-4 py-24 sm:py-32 lg:py-40">
            <motion.div 
              className="max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center rounded-full bg-cyan-500/10 px-3 py-1 text-sm font-semibold leading-6 text-cyan-300 ring-1 ring-inset ring-cyan-500/20">
                {content.badge}
              </div>
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-6xl">{content.title}</h1>
              <p className="mt-6 text-lg leading-8 text-cyan-200">{content.subtitle}</p>
              <div className="mt-10 flex items-center gap-x-6">
                <Button size="lg" onClick={() => navigate('/contacto')}>
                    {content.cta.owner}
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-cyan-900" onClick={() => navigate('/para-clinicas/referir-caso')}>
                    {content.cta.vet} <Icons.ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Description Section */}
        <Section className="bg-white dark:bg-slate-900">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-cyan-900 dark:text-white sm:text-4xl">{content.description.title}</h2>
              {content.description.paragraphs.map((p, i) => (
                <p key={i} className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">{p}</p>
              ))}
            </div>
             <div className="relative">
                <img alt={serviceImage.alt} className="w-full h-auto rounded-xl shadow-2xl" src={serviceImage.src} />
                <div className="absolute -bottom-4 -right-4 bg-cyan-500 text-white p-4 rounded-lg shadow-lg w-48 text-center">
                    <Icons.Info className="mx-auto h-8 w-8 mb-2"/>
                    <p className="font-bold text-sm">Tecnología de vanguardia al servicio de su mascota.</p>
                </div>
            </div>
          </div>
        </Section>

        {/* Benefits Section */}
        <Section className="bg-slate-50 dark:bg-slate-800/50">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-cyan-900 dark:text-white sm:text-4xl">{content.benefits.title}</h2>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:max-w-none lg:grid-cols-3">
              {content.benefits.items.map((benefit, i) => {
                 const IconComponent = Icons[benefit.icon] || Icons.CheckCircle;
                 return (
                     <motion.div 
                        key={i} 
                        className="flex flex-col items-center text-center p-6 bg-white dark:bg-slate-900 rounded-xl shadow-lg"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                    >
                      <IconComponent className="h-8 w-8 mb-2 text-cyan-400" />
                      <dt className="text-lg font-semibold leading-7 text-cyan-900 dark:text-white">{benefit.text}</dt>
                    </motion.div>
                 );
              })}
            </dl>
          </div>
        </Section>

        {/* Process Section */}
        <Section className="bg-white dark:bg-slate-900">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1">
                    <h2 className="text-3xl font-bold tracking-tight text-cyan-900 dark:text-white sm:text-4xl">{content.process.title}</h2>
                    {content.process.paragraphs.map((p,i) => (
                        <p key={i} className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">{p}</p>
                    ))}
                    <ul className="mt-8 space-y-4">
                        {content.process.equipment.map((item, i) => (
                            <li key={i} className="flex items-center gap-x-3">
                                <Icons.CheckCircle className="h-6 w-6 flex-none text-cyan-500" aria-hidden="true" />
                                <span className="text-md font-medium text-slate-700 dark:text-slate-200">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="order-1 lg:order-2">
                    <img alt="Equipo de endoscopia veterinaria Olympus y Karl Storz" className="w-full h-auto rounded-xl shadow-2xl" src={processImage} />
                </div>
            </div>
        </Section>

        {/* FAQs Section */}
        <Section className="bg-slate-50 dark:bg-slate-800/50">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-center text-3xl font-bold tracking-tight text-cyan-900 dark:text-white sm:text-4xl">{content.faqs.title}</h2>
                <Accordion type="single" collapsible className="w-full mt-10">
                {content.faqs.items.map((faq, i) => (
                    <AccordionItem key={i} value={`item-${i}`} className="border-b-cyan-200 dark:border-b-cyan-800">
                        <AccordionTrigger className="text-left text-lg font-semibold text-cyan-900 dark:text-white hover:no-underline">{faq.question}</AccordionTrigger>
                        <AccordionContent className="text-base text-slate-600 dark:text-slate-300 pt-2">
                            {faq.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
                </Accordion>
            </div>
        </Section>

        {/* Related Cases Section */}
        {relatedCasesTag && <RelatedCases serviceTag={relatedCasesTag} />}

      </div>
    </>
  );
};

export default ServicioMISPage;