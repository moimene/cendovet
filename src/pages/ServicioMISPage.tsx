import React from 'react';
import SEOHead from '@/components/SEOHead';
import { seoData } from '@/data/seoData';
import { serviceSchemas, breadcrumbSchema, faqSchema } from '@/data/schemaData';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { CheckCircle, ChevronRight } from 'lucide-react';
import { servicesData } from '@/data/servicesData';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import RelatedCases from '@/components/RelatedCases';
import InstagramCases from '@/components/InstagramCases';
import ecocardioImg from '@/assets/ecocardio.jpg';
import ecocardioCardioImg from '@/assets/ecocardio_cardiologia.jpg';
import cardiologyBookImg from '@/assets/cardiology_book.png';
import ecografiaDopplerImg from '@/assets/ecografia_doppler.png';
import endoscopiaImg from '@/assets/endoscopia_cendovet.png';
import cirugiaMisImg from '@/assets/cirugia_mis_cendovet.png';
import cirugiaMisVsImg from '@/assets/cirugia_mis_vs.png';
import fluoroscopiaImg from '@/assets/fluoroscopia_cendovet.jpg';
import fluoroscopiaRxImg from '@/assets/fluoroscopia_rx.png';
import ecografiaIndicacionesImg from '@/assets/ecografia_indicaciones.png';
import litotriciaVideo from '@/assets/litotricia_video.mp4';
import litotriciaProcesoImg from '@/assets/litotricia_proceso.png';

const ServicioMISPage = () => {
  const { serviceKey } = useParams();
  const navigate = useNavigate();
  const service = servicesData[serviceKey];
  const lang = 'es';
  const content = service?.[lang];

  if (!content || !content.badge) {
    const placeholderTitle = service?.es?.title || service?.en?.title || "Servicio no encontrado";
    return (
      <div className="flex flex-col items-center justify-center text-center py-20 md:py-32 px-4 bg-muted">
        <SEOHead
          title={`${placeholderTitle} - Próximamente - CENDOVET`}
          description={`Información sobre ${placeholderTitle} estará disponible pronto.`}
          canonicalUrl="https://cendovet.lovable.app"
          noindex
        />
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{placeholderTitle}</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mb-8">
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

  const seoKeyMap: Record<string, string> = {
    'laparoscopia': 'laparoscopia',
    'endoscopia': 'endoscopia',
    'litotricia-laser': 'litotricia',
    'fluoroscopia': 'fluoroscopia',
    'cardiologia': 'cardiologia',
    'ecografia': 'ecografia',
    'cirugia-mis': 'cirugia_mis',
    'medicina-felina': 'medicina_felina',
    'traumatologia': 'traumatologia',
    'neurologia': 'neurologia',
  };
  const seoKey = seoKeyMap[serviceKey || ''] || 'home';
  const pageSeo = seoData[seoKey];

  const serviceTagMapping = {
    'laparoscopia': 'Laparoscopia',
    'endoscopia': 'Endoscopia',
    'litotricia-laser': 'Litotricia Láser',
    'fluoroscopia': 'Fluoroscopia',
    'cardiologia': 'Cardiología',
    'ecografia': 'Ecografía',
    'medicina-felina': 'Medicina Felina',
  };
  const relatedCasesTag = serviceTagMapping[serviceKey] || '';

  const getImageForService = (key) => {
    switch (key) {
      case 'laparoscopia':
        return { src: "https://images.unsplash.com/photo-1579684288599-e6b7e7a940ad", alt: "Cirujana veterinaria realizando una laparoscopia" };
      case 'endoscopia':
        return { src: endoscopiaImg, alt: "Equipo veterinario de CENDOVET realizando una endoscopia" };
      case 'litotricia-laser':
        return { src: litotriciaVideo, alt: "Procedimiento de litotricia láser veterinaria en CENDOVET", isVideo: true };
      case 'fluoroscopia':
        return { src: fluoroscopiaImg, alt: "Equipo de fluoroscopia digital en un quirofano veterinario" };
      case 'cardiologia':
        return { src: ecocardioCardioImg, alt: "Ecocardiografía veterinaria con vistas cardíacas y doppler color" };
      case 'ecografia':
        return { src: ecografiaDopplerImg, alt: "Ecografía veterinaria con doppler color" };
      case 'medicina-felina':
        return { src: "https://images.unsplash.com/photo-1574158622682-e40e6984100d", alt: "Gato de aspecto saludable siendo examinado" };
      case 'cirugia-mis':
        return { src: cirugiaMisImg, alt: "Cirugía mínimamente invasiva veterinaria en CENDOVET" };
      default:
        return { src: "https://images.unsplash.com/photo-1517478292-6643e6a62cfe", alt: "Equipo médico veterinario de alta tecnología" };
    }
  };

  const serviceImage = getImageForService(serviceKey);
  const processImage = serviceKey === 'cirugia-mis' ? cirugiaMisVsImg : serviceKey === 'fluoroscopia' ? fluoroscopiaRxImg : serviceKey === 'ecografia' ? ecografiaIndicacionesImg : serviceKey === 'litotricia-laser' ? litotriciaProcesoImg : cardiologyBookImg;

  return (
    <>
      <SEOHead
        {...pageSeo}
        jsonLd={[
          serviceSchemas[seoKey as keyof typeof serviceSchemas] || {},
          breadcrumbSchema([
            { name: 'Inicio', url: 'https://cendovet.lovable.app/' },
            { name: 'Servicios', url: 'https://cendovet.lovable.app/servicios/laparoscopia' },
            { name: content.title, url: pageSeo?.canonicalUrl || '' }
          ]),
          ...(content.faqs?.items ? [faqSchema(content.faqs.items)] : [])
        ]}
      />

      <div className="bg-background">
        {/* Hero — flat, left-aligned */}
        <section className="bg-primary py-20 sm:py-28">
          <div className="container mx-auto px-4">
            <p className="text-sm font-semibold tracking-widest uppercase text-primary-foreground/60">{content.badge}</p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl max-w-2xl">{content.title}</h1>
            <p className="mt-5 text-lg text-primary-foreground/80 max-w-xl leading-relaxed">{content.subtitle}</p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold" onClick={() => navigate('/contacto')}>
                {content.cta.owner}
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground/40 hover:bg-primary-foreground/10" onClick={() => navigate('/para-clinicas/referir-caso')}>
                {content.cta.vet} <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Description */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-foreground">{content.description.title}</h2>
                {content.description.paragraphs.map((p, i) => (
                  <p key={i} className="mt-5 text-muted-foreground leading-relaxed">{p}</p>
                ))}
              </div>
              <div>
                {serviceImage.isVideo ? (
                  <video className="w-full h-auto rounded-xl" src={serviceImage.src} autoPlay loop muted playsInline controls />
                ) : (
                  <img alt={serviceImage.alt} className="w-full h-auto rounded-xl" src={serviceImage.src} />
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits — simple text list, no icon cards */}
        <section className="bg-muted py-16 sm:py-24 border-y border-border">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">{content.benefits.title}</h2>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-6">
              {content.benefits.items.map((benefit, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground font-medium">{benefit.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-foreground">{content.process.title}</h2>
                {content.process.paragraphs.map((p, i) => (
                  <p key={i} className="mt-5 text-muted-foreground leading-relaxed">{p}</p>
                ))}
                <ul className="mt-8 space-y-3">
                  {content.process.equipment.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
                      <span className="text-sm font-medium text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <img alt="Equipo de endoscopia veterinaria Olympus y Karl Storz" className="w-full h-auto rounded-xl" src={processImage} />
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="bg-muted py-16 sm:py-24 border-y border-border">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">{content.faqs.title}</h2>
            <Accordion type="single" collapsible className="w-full mt-10">
              {content.faqs.items.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:no-underline">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground pt-1 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Instagram Cases */}
        <InstagramCases serviceKey={serviceKey} />

        {/* Related Cases */}
        {relatedCasesTag && <RelatedCases serviceTag={relatedCasesTag} />}
      </div>
    </>
  );
};

export default ServicioMISPage;
