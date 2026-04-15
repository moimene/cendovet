import React from 'react';
import SEOHead from '@/components/SEOHead';
import { seoData } from '@/data/seoData';
import { breadcrumbSchema } from '@/data/schemaData';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const ParaClinicasPage = () => {
  const specialties = [
    { title: "Cirugía Laparoscópica", description: "Esterilizaciones, biopsias, gastropexias preventivas, exploración abdominal.", link: "/servicios/laparoscopia" },
    { title: "Endoscopia Flexible y Rígida", description: "Rinoscopia, broncoscopia, gastroscopia, colonoscopia, otoscopia.", link: "/servicios/endoscopia" },
    { title: "Litotricia Láser Intracorpórea", description: "Fragmentación de cálculos urinarios sin cirugía abierta.", link: "/servicios/litotricia-laser" },
    { title: "Fluoroscopia Digital", description: "Procedimientos guiados por imagen en tiempo real para máxima precisión.", link: "/servicios/fluoroscopia" },
    { title: "Cardiología Especializada", description: "Ecocardiografía Doppler, ECG y evaluación cardiovascular completa.", link: "/servicios/cardiologia" },
    { title: "Ecografía Abdominal Avanzada", description: "Diagnóstico por imagen especializado y toma de muestras ecoguiadas.", link: "/servicios/ecografia" },
  ];

  const steps = [
    { number: "01", title: "Contacta con nosotros", description: "Envía el caso mediante nuestro formulario o llámanos. Te asesoramos sin compromiso." },
    { number: "02", title: "Realizamos el procedimiento", description: "Ejecutamos la técnica MIS solicitada con equipamiento de última generación." },
    { number: "03", title: "Informe detallado", description: "Recibes un informe completo para que continúes el seguimiento en tu clínica." },
    { number: "04", title: "El paciente vuelve a ti", description: "Tu cliente sigue siendo tuyo. Actuamos como un servicio de apoyo especializado." },
  ];

  const advantages = [
    { title: "Equipamiento avanzado", description: "Acceso a tecnología MIS que tu clínica puede no tener disponible." },
    { title: "Especialista acreditada", description: "Dra. Eva García Gato, pionera en MIS con 15+ años de experiencia." },
    { title: "Respuesta rápida", description: "Confirmación del caso y planificación en menos de 24 horas." },
    { title: "Colaboración ética", description: "El cliente es y será siempre del veterinario remitente. Garantizado." },
    { title: "Informe completo", description: "Documentación detallada del procedimiento y recomendaciones." },
    { title: "Comunicación fluida", description: "Mantenemos informado al veterinario en cada fase del proceso." },
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

      <div className="bg-background">
        {/* Hero — simple, left-aligned, no gradient skew */}
        <section className="bg-primary py-20 md:py-28">
          <div className="container mx-auto px-4">
            <p className="text-sm font-semibold tracking-widest uppercase text-primary-foreground/70">B2B — Veterinarios</p>
            <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight text-primary-foreground max-w-2xl">
              Para Clínicas Veterinarias
            </h1>
            <p className="mt-5 text-lg max-w-xl text-primary-foreground/80 leading-relaxed">
              CENDOVET actúa como centro de referencia en España para técnicas de mínima invasión. Si eres veterinario y necesitas apoyo en un caso complejo, estamos para ayudarte.
            </p>
          </div>
        </section>

        {/* Especialidades — clean list, no icons */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground">Especialidades disponibles para derivación</h2>
            <p className="mt-3 text-muted-foreground max-w-2xl">Procedimientos avanzados que podemos realizar para tus pacientes, ampliando tu cartera de servicios.</p>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              {specialties.map((spec) => (
                <div key={spec.title} className="border-b border-border pb-6">
                  <h3 className="text-lg font-semibold text-foreground">{spec.title}</h3>
                  <p className="mt-1 text-muted-foreground text-sm leading-relaxed">{spec.description}</p>
                  <Link to={spec.link} className="mt-2 inline-flex items-center text-sm font-medium text-primary hover:underline">
                    Saber más <ArrowRight className="ml-1 h-3.5 w-3.5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Proceso — numbered steps, no icons */}
        <section className="bg-card py-16 md:py-24 border-y border-border">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground">Proceso de colaboración</h2>
            <p className="mt-3 text-muted-foreground">Trabajamos contigo, no contra ti. Nuestra filosofía es ser una extensión de tu propia clínica.</p>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step) => (
                <div key={step.number}>
                  <span className="text-3xl font-bold text-primary/30">{step.number}</span>
                  <h3 className="mt-2 text-base font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ventajas — simple grid, text-only */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground">Ventajas de referir a CENDOVET</h2>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8">
              {advantages.map((adv) => (
                <div key={adv.title}>
                  <h3 className="text-base font-semibold text-foreground">{adv.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{adv.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary py-16">
          <div className="container mx-auto px-4 max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-primary-foreground">¿Tienes un caso para derivar?</h2>
            <p className="mt-3 text-primary-foreground/80">Completa nuestro formulario de derivación online y nuestro equipo se pondrá en contacto contigo para coordinar todos los detalles.</p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
                <Link to="/para-clinicas/referir-caso">
                  Referir un Caso <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground/40 hover:bg-primary-foreground/10">
                <Link to="/contacto">Contactar Directamente</Link>
              </Button>
            </div>
            <p className="mt-6 text-sm text-primary-foreground/60 font-medium">Garantía: Respuesta confirmada en menos de 24 horas.</p>
          </div>
        </section>
      </div>
    </>
  );
};

export default ParaClinicasPage;
