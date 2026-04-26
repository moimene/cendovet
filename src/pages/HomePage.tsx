import React from 'react';
import quirofanoHero from '@/assets/quirofano-hero.jpeg';
import quirofanoCendovet from '@/assets/quirofano_cendovet.jpg';
import draEvaPhoto from '@/assets/dra-eva.png';
import SEOHead from '@/components/SEOHead';
import { seoData } from '@/data/seoData';
import { organizationSchema, websiteSchema, breadcrumbSchema } from '@/data/schemaData';
import { Button } from '@/components/ui/button';
import { MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import HomepageCases from '@/components/HomepageCases';

const HomePage = () => {
  return (
    <>
      <SEOHead
        {...seoData.home}
        jsonLd={[
          organizationSchema,
          websiteSchema,
          breadcrumbSchema([
            { name: 'Inicio', url: 'https://cendovet.lovable.app/' }
          ])
        ]}
      />

      {/* Hero */}
      <section className="relative text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            alt="Quirófano veterinario moderno y tecnológico de CENDOVET"
            src={quirofanoHero}
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-slate-900/30" />
        </div>
        <div className="relative z-10 container mx-auto px-4 py-28 md:py-40">
          <div className="max-w-2xl">
            <p className="text-teal-300 text-sm font-semibold tracking-widest uppercase mb-4">
              Centro veterinario de Referencia · Algeciras
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6">
              Endoscopia y Cirugía de Mínima Invasión
            </h1>
            <p className="text-lg text-slate-200 leading-relaxed mb-8 max-w-xl">
               Tecnología de última generación a disposición de tu familia
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700 text-white font-semibold text-base px-8">
                <Link to="/contacto">Solicitar Valoración</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/30 bg-transparent text-white hover:bg-white/10 font-semibold text-base px-8">
                <Link to="/para-clinicas/referir-caso">Referir un Caso</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">Servicios especializados</h2>
            <p className="text-slate-600">Procedimientos mínimamente invasivos con equipamiento de última generación para  diagnóstico y tratamiento de pacientes caninos y felinos.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 border border-slate-200 rounded-lg overflow-hidden">
            {[
              { title: "Laparoscopia y Toracoscopia", desc: "Cirugía de Mínima Invasión...Menos dolor, recuperación más rápida", link: "/servicios/laparoscopia" },
              { title: "Endoscopia", desc: "Diagnósticos, tratamientos mediante endoscopia para evitar cirugías.", link: "/servicios/endoscopia" },
              { title: "Litotricia Láser", desc: "Eliminación de cálculos urinarios mediante láser. Único centro en Andalucía", link: "/servicios/litotricia-laser" },
              { title: "Fluoroscopia", desc: "Imagen radiológica en tiempo real ....intervencionismo, diagnóstico, tratamiento...", link: "/servicios/fluoroscopia" },
            ].map((service) => (
              <Link
                key={service.title}
                to={service.link}
                className="bg-white p-8 flex flex-col justify-between group"
              >
                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-teal-600 transition-colors">{service.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{service.desc}</p>
                </div>
                <span className="mt-6 text-sm font-semibold text-teal-600 flex items-center gap-1 group-hover:gap-2 transition-all">
                  Saber más <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-6 grid sm:grid-cols-3 gap-px bg-slate-200 border border-slate-200 rounded-lg overflow-hidden">
            {[
              { title: "Cardiología", desc: "Diagnóstico cardiológico avanzado con ecocardiografía.", link: "/servicios/cardiologia" },
              { title: "Ecografía Especializada", desc: "Ecografía abdominal y torácica de alta resolución.", link: "/servicios/ecografia" },
              { title: "Medicina Felina", desc: "Atención especializada para gatos en un entorno adaptado a sus necesidades.", link: "/servicios/medicina-felina" },
            ].map((service) => (
              <Link
                key={service.title}
                to={service.link}
                className="bg-white p-8 flex flex-col justify-between group"
              >
                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-teal-600 transition-colors">{service.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{service.desc}</p>
                </div>
                <span className="mt-6 text-sm font-semibold text-teal-600 flex items-center gap-1 group-hover:gap-2 transition-all">
                  Saber más <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Por qué CENDOVET */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">¿Por qué CENDOVET?</h2>
              <div className="space-y-6 text-slate-600">
                <p>
                  Somos el único centro en Andalucía que reúne <strong className="text-slate-800">laparoscopia, toracoscopia, cirugía 3D, fluorescencia  ICG/NIR,  endoscopia oncológica, litotricia láser, láser de diodo, electroquimioterapia y fluoroscopia</strong> bajo un mismo techo. Esto significa menos desplazamientos y un abordaje integral para el paciente.
                </p>
                <p>
                  Dirigido por la <strong className="text-slate-800">Dra. Eva G. Gato</strong>, referente nacional en cirugía MIS veterinaria y cofundadora de MINIMAL, con más de 15 años de experiencia.
                </p>
                <p>
                  Nuestra tecnología — plataforma Karl Storz RUBINA 4K/3D fluorescencia ICG/NIR,  láser holmium, fluoroscopia digital, endoscopia Eluxeo 8000 Fuji — está al nivel de los mejores hospitales de medicina humana y nos posiciona como uno de los mejores centros veterinarios europeos.
                </p>
              </div>
              <div className="mt-8">
                <Button asChild className="bg-teal-600 hover:bg-teal-700 text-white font-semibold">
                  <Link to="/sobre-cendovet">Conocer al equipo</Link>
                </Button>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img
                alt="Quirófano de CENDOVET equipado con tecnología de última generación"
                src={quirofanoCendovet}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Casos Clínicos */}
      <HomepageCases />

      {/* Cobertura + Dra. Eva */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Cobertura */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Cobertura geográfica</h2>
              <p className="text-slate-600 mb-6">
                Atendemos a clínicas y propietarios de toda la zona sur de España y aceptamos referencias a nivel nacional.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Campo de Gibraltar', 'Marbella', 'Sotogrande', 'Gibraltar', 'Ceuta', 'Cádiz'].map(loc => (
                  <span key={loc} className="bg-slate-100 text-slate-700 text-sm font-medium px-4 py-2 rounded-full flex items-center gap-2">
                    <MapPin size={14} className="text-teal-600" /> {loc}
                  </span>
                ))}
              </div>
            </div>

            {/* Dra. Eva */}
            <div className="flex gap-6 items-start">
              <img
                alt="Dra. Eva G. Gato, directora médica de CENDOVET"
                className="w-28 h-28 rounded-lg object-cover flex-shrink-0"
                src={draEvaPhoto}
                loading="lazy"
              />
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-1">Dra. Eva G. Gato</h3>
                <p className="text-sm text-teal-600 font-semibold mb-3">Directora Médica · Cirugía MIS</p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Cofundadora de MINIMAL y referente en endoscopia y cirugía de mínima invasión veterinaria en España, con más de 15 años de experiencia clínica y docente.
                </p>
                <Link to="/sobre-cendovet" className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-teal-600 hover:text-teal-500 transition-colors">
                  Conocer más <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
