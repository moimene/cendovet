import React from 'react';
import quirofanoHero from '@/assets/quirofano-hero.jpeg';
import quirofanoCendovet from '@/assets/quirofano_cendovet.jpg';
import draEvaPhoto from '@/assets/dra-eva.png';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { useToast } from "@/components/ui/use-toast";
import { Stethoscope, Heart, Microscope, Atom, MapPin, Award, Bone, Facebook, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import GoogleReviews from '@/components/GoogleReviews';
import HomepageCases from '@/components/HomepageCases';

const HomePage = () => {
  const { toast } = useToast();

  const handleActionClick = () => {
    toast({
      title: "🚧 ¡Funcionalidad en camino!",
      description: "Esta sección aún no está implementada. ¡Pero no te preocupes, puedes solicitarla en tu próximo mensaje! 🚀",
      variant: "default"
    });
  };

  const misServices = [
    { icon: <Stethoscope size={40} className="text-teal-600" />, title: "Laparoscopia", description: "Cirugía abdominal con incisiones mínimas para una recuperación más rápida.", link: "/servicios/laparoscopia" },
    { icon: <Heart size={40} className="text-rose-600" />, title: "Endoscopia", description: "Diagnóstico y tratamiento de problemas internos sin cirugía abierta.", link: "/servicios/endoscopia" },
    { icon: <Atom size={40} className="text-amber-600" />, title: "Litotricia Láser", description: "Eliminación de cálculos urinarios sin cirugía, único en Andalucía.", link: "/servicios/litotricia-laser" },
    { icon: <Bone size={40} className="text-emerald-600" />, title: "Fluoroscopia", description: "Radiografía en tiempo real para procedimientos guiados con máxima precisión.", link: "/servicios/fluoroscopia" },
  ];

  const whyChooseUs = [
    { icon: <Award size={32} className="text-teal-500" />, title: "Tecnología Pionera", description: "Equipamiento de última generación para diagnósticos y tratamientos precisos." },
    { icon: <Microscope size={32} className="text-teal-500" />, title: "Alta Especialización", description: "Dirigido por la Dra. Eva G. Gato, referente nacional en Cirugía MIS." },
    { icon: <Heart size={32} className="text-teal-500" />, title: "Máximo Cuidado", description: "Priorizamos el bienestar de tu mascota con un enfoque compasivo." },
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
      <section
        className="relative text-white py-32 md:py-48 text-center"
      >
        <div className="absolute inset-0 bg-slate-900/50 z-0"></div>
        <div className="absolute inset-0 z-[-1]">
            <img className="w-full h-full object-cover" alt="Quirófano veterinario moderno y tecnológico de CENDOVET" src={quirofanoHero} loading="lazy" />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <div>
            <span className="inline-block bg-teal-700 text-white text-sm font-bold px-4 py-1 rounded-full mb-4">
              Centro de Referencia Nacional
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
              Centro pionero en cirugía veterinaria <br className="hidden md:block" />mínimamente invasiva
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-200 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
              Menos dolor, recuperación más rápida y máxima precisión quirúrgica para tu mascota, con tecnología de última generación.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700 text-white font-bold text-lg px-8 py-6 w-full sm:w-auto transition-transform transform hover:scale-105">
                <Link to="/contacto">Solicitar Valoración</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-slate-900 font-bold text-lg px-8 py-6 w-full sm:w-auto transition-transform transform hover:scale-105">
                <Link to="/para-clinicas/referir-caso">Referir un Caso</Link>
              </Button>
            </div>
            <p className="text-sm text-teal-100/80 mt-3">Te contactamos en menos de 24 horas. Sin compromiso.</p>
          </div>
        </div>
      </section>

      {/* Servicios MIS */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-slate-800 dark:text-teal-400">Nuestros Servicios MIS</h2>
            <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">Excelencia y precisión en cada procedimiento para una recuperación más rápida y segura.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {misServices.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-slate-900 p-8 rounded-xl shadow-lg hover:shadow-teal-500/10 transition-shadow duration-300 text-center"
              >
                <div className="flex justify-center mb-4" aria-label={`${service.title} icon`}>{service.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-white">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{service.description}</p>
                <Button asChild variant="link" className="text-teal-600 dark:text-teal-400 font-bold">
                  <Link to={service.link}>Saber más →</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Por qué elegirnos */}
      <section className="py-20 bg-gray-100 dark:bg-slate-900">
        <div className="container mx-auto px-4">
           <div>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-800 dark:text-teal-400">¿Por qué CENDOVET?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {whyChooseUs.map((item, index) => (
               <div
                key={index}
                className="p-6"
               >
                <div className="flex justify-center mb-4" aria-label={`${item.title} icon`}>{item.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-white">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Casos Clínicos Destacados */}
      <HomepageCases />

      {/* Reseñas de Google */}
      <GoogleReviews />

      {/* Cobertura Geográfica */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 dark:text-teal-400">Cobertura Geográfica</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">Ofrecemos nuestros servicios especializados a clínicas y propietarios en una amplia zona, y aceptamos referencias de toda España.</p>
              <div className="flex flex-wrap gap-3">
                {['Campo de Gibraltar', 'Marbella', 'Sotogrande', 'Gibraltar', 'Ceuta', 'Cádiz'].map(loc => (
                  <span key={loc} className="bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-200 text-sm font-semibold px-3 py-1 rounded-full flex items-center gap-2">
                    <MapPin size={14} /> {loc}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <img alt="Quirófano de CENDOVET equipado con tecnología de última generación" src={quirofanoCendovet} className="w-full h-auto object-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Perfil Cirujana */}
      <section className="py-20 bg-slate-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div
              className="md:col-span-1 flex justify-center"
            >
              <img alt="Dra. Eva G. Gato, directora médica de CENDOVET" className="rounded-full w-72 h-72 object-cover object-top border-4 border-teal-400 shadow-lg bg-slate-700" src={draEvaPhoto} />
            </div>
            <div
              className="md:col-span-2"
            >
              <h3 className="text-3xl font-bold mb-2 text-teal-300">Dra. Eva G. Gato</h3>
              <p className="font-semibold text-lg mb-4 text-teal-400">Pionera en Cirugía MIS Veterinaria</p>
              <p className="mb-6 text-slate-300">Con más de 15 años de experiencia y cofundadora de MINIMAL, la Dra. Gato es una de las voces más respetadas en endoscopia y cirugía de mínima invasión en España, dedicada a mejorar la calidad de vida de las mascotas.</p>
              <Button asChild variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-slate-800">
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
