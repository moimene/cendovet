import React from 'react';
import quirofanoHero from '@/assets/quirofano-hero.jpeg';
import quirofanoCendovet from '@/assets/quirofano_cendovet.jpg';
import draEvaPhoto from '@/assets/dra-eva.png';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { Stethoscope, Heart, Microscope, Atom, MapPin, Award, Bone } from 'lucide-react';
import { Link } from 'react-router-dom';
import GoogleReviews from '@/components/GoogleReviews';
import HomepageCases from '@/components/HomepageCases';

const HomePage = () => {
  const misServices = [
    { icon: <Stethoscope size={40} className="text-teal-600" />, title: "Laparoscopia", description: "Cirugía abdominal con incisiones mínimas para una recuperación más rápida.", link: "/servicios/laparoscopia" },
    { icon: <Heart size={40} className="text-teal-600" />, title: "Endoscopia", description: "Diagnóstico y tratamiento de problemas internos sin cirugía abierta.", link: "/servicios/endoscopia" },
    { icon: <Atom size={40} className="text-teal-600" />, title: "Litotricia Láser", description: "Eliminación de cálculos urinarios sin cirugía, único en Andalucía.", link: "/servicios/litotricia-laser" },
    { icon: <Bone size={40} className="text-teal-600" />, title: "Fluoroscopia", description: "Radiografía en tiempo real para procedimientos guiados con máxima precisión.", link: "/servicios/fluoroscopia" },
  ];

  const whyChooseUs = [
    { icon: <Award size={32} className="text-teal-600" />, title: "Tecnología Pionera", description: "Equipamiento de última generación para diagnósticos y tratamientos precisos." },
    { icon: <Microscope size={32} className="text-teal-600" />, title: "Alta Especialización", description: "Dirigido por la Dra. Eva G. Gato, referente nacional en Cirugía MIS." },
    { icon: <Heart size={32} className="text-teal-600" />, title: "Máximo Cuidado", description: "Priorizamos el bienestar de tu mascota con un enfoque compasivo." },
  ];

  return (
    <>
      <Helmet>
        <title>CENDOVET - Cirugía Veterinaria Mínimamente Invasiva</title>
        <meta name="description" content="Centro pionero en cirugía veterinaria mínimamente invasiva en España. Ofrecemos laparoscopia, endoscopia, litotricia láser y fluoroscopia." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@500;600;700;800&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative text-white py-32 md:py-48 text-center">
        <div className="absolute inset-0 bg-slate-900/60 z-0"></div>
        <div className="absolute inset-0 z-[-1]">
          <img
            className="w-full h-full object-cover"
            alt="Quirófano veterinario moderno y tecnológico de CENDOVET"
            src={quirofanoHero}
            loading="eager"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <div>
            <span className="inline-block bg-white/90 text-teal-700 text-sm font-semibold px-4 py-1 rounded-full mb-4">
              Centro de Referencia Nacional
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Centro pionero en cirugía veterinaria <br className="hidden md:block" />mínimamente invasiva
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-100">
              Menos dolor, recuperación más rápida y máxima precisión quirúrgica para tu mascota, con tecnología de última generación.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700 text-white font-bold text-lg px-8 py-6 w-full sm:w-auto">
                <Link to="/contacto">Solicitar Valoración</Link>
              </Button>
              <Link to="/para-clinicas/referir-caso" className="text-white font-semibold hover:text-gray-200 transition-colors">
                Referir un Caso →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios MIS */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-left text-3xl md:text-4xl font-bold text-slate-800 mb-2">Nuestros Servicios MIS</h2>
            <p className="text-left text-slate-600 max-w-2xl text-sm">Excelencia y precisión en cada procedimiento para una recuperación más rápida y segura.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Large Feature Card - Laparoscopia */}
            <div className="md:col-span-1 border border-slate-200 rounded-lg p-8 bg-white">
              <div className="mb-4">{misServices[0].icon}</div>
              <h3 className="text-xl font-bold text-slate-800 mb-2 text-left">{misServices[0].title}</h3>
              <p className="text-slate-600 mb-4 text-left text-sm">{misServices[0].description}</p>
              <Button asChild variant="link" className="text-teal-600 font-bold pl-0">
                <Link to={misServices[0].link}>Saber más →</Link>
              </Button>
            </div>

            {/* Right Column - 3 Smaller Services */}
            <div className="md:col-span-2 space-y-6">
              {misServices.slice(1).map((service, index) => (
                <div key={index} className="border border-slate-200 rounded-lg p-6 bg-white">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">{service.icon}</div>
                    <div className="flex-grow text-left">
                      <h3 className="text-lg font-bold text-slate-800 mb-1">{service.title}</h3>
                      <p className="text-slate-600 mb-3 text-sm">{service.description}</p>
                      <Button asChild variant="link" className="text-teal-600 font-bold pl-0">
                        <Link to={service.link}>Saber más →</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Por qué CENDOVET */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Column - Philosophy */}
            <div className="text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">¿Por qué CENDOVET?</h2>
              <p className="text-slate-600 text-sm mb-8 max-w-[70ch]">
                Nos dedicamos a ofrecer soluciones quirúrgicas innovadoras que priorizan el bienestar de tu mascota. Con tecnología de vanguardia, experiencia comprobada y un enfoque centrado en la compasión, CENDOVET es tu socio de confianza en cirugía mínimamente invasiva.
              </p>
            </div>

            {/* Right Column - Benefits List */}
            <div className="space-y-6 text-left">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 pt-1">{item.icon}</div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-800 mb-1">{item.title}</h3>
                    <p className="text-slate-600 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Casos Clínicos Destacados */}
      <HomepageCases />

      {/* Reseñas de Google */}
      <GoogleReviews />

      {/* Cobertura Geográfica */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Cobertura Geográfica</h2>
              <p className="text-slate-600 text-sm mb-8 max-w-[70ch]">
                Ofrecemos nuestros servicios especializados a clínicas y propietarios en una amplia zona, y aceptamos referencias de toda España.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Campo de Gibraltar', 'Marbella', 'Sotogrande', 'Gibraltar', 'Ceuta', 'Cádiz'].map(loc => (
                  <span key={loc} className="bg-teal-50 text-teal-700 text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-2 border border-teal-200">
                    <MapPin size={14} /> {loc}
                  </span>
                ))}
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

      {/* Perfil Cirujana */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 items-center">
            <div className="md:col-span-1 flex justify-center">
              <img
                alt="Dra. Eva G. Gato, directora médica de CENDOVET"
                className="rounded-lg w-72 h-auto object-cover border-4 border-teal-200"
                src={draEvaPhoto}
                loading="lazy"
              />
            </div>
            <div className="md:col-span-2 text-left">
              <h3 className="text-3xl font-bold text-teal-700 mb-2">Dra. Eva G. Gato</h3>
              <p className="font-semibold text-slate-500 mb-4">Pionera en Cirugía MIS Veterinaria</p>
              <p className="text-slate-600 text-sm mb-6 max-w-[70ch]">
                Con más de 15 años de experiencia y cofundadora de MINIMAL, la Dra. Gato es una de las voces más respetadas en endoscopia y cirugía de mínima invasión en España, dedicada a mejorar la calidad de vida de las mascotas.
              </p>
              <Button asChild className="bg-teal-600 text-white hover:bg-teal-700">
                <Link to="/sobre-cendovet">Conocer más</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
