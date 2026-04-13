import React from 'react';
import quirofanoHero from '@/assets/quirofano-hero.jpeg';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from "@/components/ui/use-toast";
import { Stethoscope, Heart, Microscope, Atom, MapPin, Award, Bone, Facebook, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom'; // Import Link

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring' as const,
      stiffness: 100
    }
  }
};

const HomePage = () => {
  const { toast } = useToast();

  const handleActionClick = () => {
    toast({
      title: "🚧 ¡Funcionalidad en camino!",
      description: "Esta sección aún no está implementada. ¡Pero no te preocupes, puedes solicitarla en tu próximo mensaje! 🚀",
      variant: "destructive"
    });
  };

  const misServices = [
    { icon: <Stethoscope size={40} className="text-cyan-500" />, title: "Laparoscopia", description: "Cirugía abdominal con incisiones mínimas para una recuperación más rápida." },
    { icon: <Heart size={40} className="text-rose-500" />, title: "Endoscopia", description: "Diagnóstico y tratamiento de problemas internos sin cirugía abierta." },
    { icon: <Atom size={40} className="text-amber-500" />, title: "Litotricia Láser", description: "Eliminación de cálculos urinarios sin cirugía, único en Andalucía." },
    { icon: <Bone size={40} className="text-lime-500" />, title: "Fluoroscopia", description: "Radiografía en tiempo real para procedimientos guiados con máxima precisión." },
  ];

  const whyChooseUs = [
    { icon: <Award size={32} className="text-cyan-400" />, title: "Tecnología Pionera", description: "Equipamiento de última generación para diagnósticos y tratamientos precisos." },
    { icon: <Microscope size={32} className="text-cyan-400" />, title: "Alta Especialización", description: "Dirigido por la Dra. Eva G. Gato, referente nacional en Cirugía MIS." },
    { icon: <Heart size={32} className="text-cyan-400" />, title: "Máximo Cuidado", description: "Priorizamos el bienestar de tu mascota con un enfoque compasivo." },
  ];

  return (
    <>
      <Helmet>
        <title>CENDOVET - Cirugía Veterinaria Mínimamente Invasiva</title>
        <meta name="description" content="Centro pionero en cirugía veterinaria mínimamente invasiva en España. Ofrecemos laparoscopia, endoscopia, litotricia láser y fluoroscopia." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet" />
      </Helmet>

      {/* Hero Section */}
      <motion.section 
        className="relative text-white py-32 md:py-48 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        <div className="absolute inset-0 z-[-1]">
            <img className="w-full h-full object-cover" alt="Quirófano veterinario moderno y tecnológico de CENDOVET" src={quirofanoHero} />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.span variants={itemVariants} className="inline-block bg-cyan-500/20 text-cyan-300 backdrop-blur-sm text-sm font-bold px-4 py-1 rounded-full mb-4 border border-cyan-500/30">
              Centro de Referencia Nacional
            </motion.span>
            <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-bold mb-4 text-shadow-lg" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.7)'}}>
              Centro pionero en cirugía veterinaria <br className="hidden md:block" />mínimamente invasiva
            </motion.h1>
            <motion.p variants={itemVariants} className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-200" style={{textShadow: '1px 1px 4px rgba(0,0,0,0.7)'}}>
              Tecnología de vanguardia y un equipo experto dedicados a la salud y bienestar de tu mascota.
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold text-lg px-8 py-6 w-full sm:w-auto transition-transform transform hover:scale-105" onClick={handleActionClick}>
                Solicitar Cita
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-cyan-900 font-bold text-lg px-8 py-6 w-full sm:w-auto transition-transform transform hover:scale-105" onClick={handleActionClick}>
                Referir un Caso
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Servicios MIS */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-cyan-900 dark:text-cyan-400">Nuestros Servicios MIS</h2>
            <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">Excelencia y precisión en cada procedimiento para una recuperación más rápida y segura.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {misServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 dark:bg-slate-900 p-8 rounded-xl shadow-lg hover:shadow-cyan-500/20 transition-shadow duration-300 text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-cyan-900 dark:text-white">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{service.description}</p>
                <Button variant="link" className="text-cyan-600 dark:text-cyan-400 font-bold" onClick={handleActionClick}>Saber más</Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Por qué elegirnos */}
      <section className="py-20 bg-gray-100 dark:bg-slate-900">
        <div className="container mx-auto px-4">
           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-cyan-900 dark:text-cyan-400">¿Por qué CENDOVET?</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {whyChooseUs.map((item, index) => (
               <motion.div
                key={index}
                className="p-6"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
               >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-cyan-900 dark:text-white">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Cobertura Geográfica */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-cyan-900 dark:text-cyan-400">Cobertura Geográfica</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">Ofrecemos nuestros servicios especializados a clínicas y propietarios en una amplia zona, y aceptamos referencias de toda España.</p>
              <div className="flex flex-wrap gap-3">
                {['Campo de Gibraltar', 'Marbella', 'Sotogrande', 'Gibraltar', 'Ceuta', 'Cádiz'].map(loc => (
                  <span key={loc} className="bg-cyan-100 dark:bg-cyan-900/50 text-cyan-800 dark:text-cyan-300 text-sm font-semibold px-3 py-1 rounded-full flex items-center gap-2">
                    <MapPin size={14} /> {loc}
                  </span>
                ))}
              </div>
            </motion.div>
            <motion.div
              className="rounded-lg overflow-hidden shadow-2xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7 }}
            >
              <img alt="Mapa de la zona de cobertura de CENDOVET en el sur de España" src="https://images.unsplash.com/photo-1621273961349-0612be84b10a" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Perfil Cirujana */}
      <section className="py-20 bg-cyan-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <motion.div 
              className="md:col-span-1 flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7 }}
            >
              <img alt="Dra. Eva G. Gato, directora médica de CENDOVET" className="rounded-full w-64 h-64 object-cover border-4 border-cyan-500 shadow-lg" src="https://images.unsplash.com/photo-1615266508026-874e2c021320" />
            </motion.div>
            <motion.div 
              className="md:col-span-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7 }}
            >
              <h3 className="text-3xl font-bold mb-2 text-cyan-300">Dra. Eva G. Gato</h3>
              <p className="font-semibold text-lg mb-4 text-cyan-400">Pionera en Cirugía MIS Veterinaria</p>
              <p className="mb-6 text-cyan-100">Con más de 15 años de experiencia y cofundadora de MINIMAL, la Dra. Gato es una de las voces más respetadas en endoscopia y cirugía de mínima invasión en España, dedicada a mejorar la calidad de vida de las mascotas.</p>
              <Button asChild variant="outline" className="text-white border-white hover:bg-white hover:text-cyan-800">
                <Link to="/sobre-cendovet">Conocer más</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;