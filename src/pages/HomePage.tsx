import React from 'react';
import quirofanoHero from '@/assets/quirofano-hero.jpeg';
import quirofanoCendovet from '@/assets/quirofano_cendovet.jpg';
import draEvaPhoto from '@/assets/dra-eva.png';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { Stethoscope, Heart, Microscope, Atom, MapPin, Bone } from 'lucide-react';
import { Link } from 'react-router-dom';
import GoogleReviews from '@/components/GoogleReviews';
import HomepageCases from '@/components/HomepageCases';

const HomePage = () => {
  const misServices = [
    { icon: <Stethoscope size={28} className="text-teal-600" />, title: "Laparoscopia", description: "Cirugía abdominal con incisiones mínimas para una recuperación más rápida.", link: "/servicios/laparoscopia" },
    { icon: <Heart size={28} className="text-rose-600" />, title: "Endoscopia", description: "Diagnóstico y tratamiento de problemas internos sin cirugía abierta.", link: "/servicios/endoscopia" },
    { icon: <Atom size={28} className="text-amber-600" />, title: "Litotricia Láser", description: "Eliminación de cálculos urinarios sin cirugía, único en Andalucía.", link: "/servicios/litotricia-laser" },
    { icon: <Bone size={28} className="text-emerald-600" />, title: "Fluoroscopia", description: "Radiografía en tiempo real para procedimientos guiados con máxima precisión.", link: "/servicios/fluoroscopia" },
  ];

  return (
    <>
      <Helmet>
        <title>CENDOVET - Cirugía Veterinaria Mínimamente Invasiva</title>
        <meta name="description" content="Centro pionero en cirugía veterinaria mínimamente invasiva en España. Ofrecemos laparoscopia, endoscopia, litotricia láser y fluoroscopia." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative text-white py-28 md:py-44">
        <div className="absolute inset-0 bg-slate-900/60 z-0" />
        <div className="absolute inset-0 z-[-1]">
          <img className="w-full h-full object-cover" alt="Quirófano veterinario moderno y tecnológico de CENDOVET" src={quirofanoHero} loading="eager" />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="inline-block bg-teal-700/90 text-white text-xs font-semibold tracking-wider uppercase px-4 py-1.5 rounded-sm mb-5">
              Centro de Referencia Nacional
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-5">
              Cirugía veterinaria mínimamente invasiva
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mb-8 text-slate-200 leading-relaxed">
              Menos dolor, recuperación más rápida y máxima precisión quirúrgica para tu mascota.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700 text-white font-semibold text-base px-7">
                <Link to="/contacto">Solicitar Valoración</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white/70 hover:bg-white/10 font-semibold text-base px-7">
                <Link to="/para-clinicas/referir-caso">Referir un Caso</Link>
              </Button>
            </div>
            <p className="text-sm text-white/60 mt-4">Te contactamos en menos de 24 horas.</p>
          </div>
        </div>
      </section>

      {/* Servicios MIS */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">Nuestros Servicios</h2>
            <p className="text-slate-600 text-lg leading-relaxed">Excelencia y precisión en cada procedimiento para una recuperación más rápida y segura.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl">
            {misServices.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="group flex gap-5 p-6 rounded-lg bg-white border border-slate-100 hover:border-teal-200 hover:shadow-md transition-all duration-200"
              >
                <div className="flex-shrink-0 mt-1">{service.icon}</div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-1 group-hover:text-teal-600 transition-colors">{service.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Casos Clínicos Destacados */}
      <HomepageCases />

      {/* Reseñas de Google */}
      <GoogleReviews />

      {/* Cobertura + Perfil Cirujana — combined section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Cobertura */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">Cobertura Geográfica</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">Ofrecemos nuestros servicios especializados a clínicas y propietarios en una amplia zona, y aceptamos referencias de toda España.</p>
              <div className="flex flex-wrap gap-2">
                {['Campo de Gibraltar', 'Marbella', 'Sotogrande', 'Gibraltar', 'Ceuta', 'Cádiz'].map(loc => (
                  <span key={loc} className="bg-teal-50 text-teal-700 text-sm font-medium px-3 py-1.5 rounded-sm flex items-center gap-1.5">
                    <MapPin size={13} /> {loc}
                  </span>
                ))}
              </div>
              <div className="mt-8 rounded-lg overflow-hidden">
                <img alt="Quirófano de CENDOVET equipado con tecnología de última generación" src={quirofanoCendovet} className="w-full h-auto object-cover" loading="lazy" />
              </div>
            </div>

            {/* Perfil Cirujana */}
            <div className="lg:col-span-3 bg-slate-800 text-white rounded-lg p-8 md:p-10">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <img
                  alt="Dra. Eva G. Gato, directora médica de CENDOVET"
                  className="w-40 h-40 md:w-48 md:h-48 rounded-lg object-cover object-top flex-shrink-0"
                  src={draEvaPhoto}
                />
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-1">Dra. Eva G. Gato</h3>
                  <p className="font-medium text-teal-400 mb-4">Pionera en Cirugía MIS Veterinaria</p>
                  <p className="text-slate-300 leading-relaxed mb-6">Con más de 15 años de experiencia y cofundadora de MINIMAL, la Dra. Gato es una de las voces más respetadas en endoscopia y cirugía de mínima invasión en España, dedicada a mejorar la calidad de vida de las mascotas.</p>
                  <Button asChild variant="outline" className="bg-transparent text-white border-white/50 hover:bg-white/10">
                    <Link to="/sobre-cendovet">Conocer más</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
