import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Award, Users, HeartHandshake, Microscope, Target, CheckCircle, Star, BrainCircuit, Microscope as Telescope, Group } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Section = ({ children, className = '' }) => (
  <motion.section
    className={`py-16 sm:py-20 ${className}`}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.8 }}
  >
    <div className="container mx-auto px-4">{children}</div>
  </motion.section>
);

const StatCard = ({ icon: Icon, value, label, delay }) => (
    <motion.div 
        className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
    >
        <Icon className="h-12 w-12 text-cyan-500 mx-auto mb-4" />
        <p className="text-4xl font-bold text-cyan-900 dark:text-white">{value}</p>
        <p className="text-slate-600 dark:text-slate-300 mt-1">{label}</p>
    </motion.div>
);

const PhilosophyCard = ({ icon: Icon, title, text }) => (
    <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-cyan-500 text-white">
                <Icon className="h-6 w-6" />
            </div>
        </div>
        <div>
            <p className="text-lg font-semibold text-cyan-900 dark:text-white">{title}</p>
            <p className="mt-1 text-slate-600 dark:text-slate-300">{text}</p>
        </div>
    </div>
);

const SobreCendovetPage = () => {
  return (
    <>
      <Helmet>
        <title>Sobre CENDOVET - Dra. Eva G. Gato y Equipo</title>
        <meta name="description" content="Conoce a la Dra. Eva García Gato, pionera en cirugía MIS, y la filosofía de excelencia y empatía que define a CENDOVET." />
      </Helmet>

      <div className="bg-white dark:bg-slate-900">
        {/* Hero Section */}
        <Section className="bg-slate-50 dark:bg-slate-800/50">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <p className="text-base font-semibold text-cyan-600 dark:text-cyan-400">Cirugía MIS con rostro propio</p>
              <h1 className="mt-2 text-4xl font-bold tracking-tight text-cyan-900 dark:text-white sm:text-5xl">Dra. Eva García Gato</h1>
              <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
                Directora médica de CENDOVET y pionera de la cirugía veterinaria de mínima invasión en España. Con más de 15 años de experiencia, ha posicionado a CENDOVET como un centro de referencia nacional, combinando excelencia técnica con un trato cercano a cada paciente.
              </p>
              <p className="mt-4 text-xl font-semibold text-cyan-800 dark:text-cyan-200">Tu mascota está en manos expertas.</p>
            </div>
            <motion.div 
              className="relative"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <img alt="Dra. Eva García Gato, directora médica de CENDOVET" className="w-full max-w-md mx-auto h-auto rounded-full shadow-2xl aspect-square object-cover" src="https://images.unsplash.com/photo-1685022036259-04cf91a89af1" />
            </motion.div>
          </div>
        </Section>

        {/* Biografía Profesional */}
        <Section>
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-cyan-900 dark:text-white">Biografía profesional – Dra. Eva G. Gato</h2>
                <p className="mt-4 text-lg text-center text-slate-600 dark:text-slate-300">La Dra. Eva García Gato encarna la experiencia, la innovación y el compromiso en cada paciente.</p>
                
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div>
                        <h3 className="text-xl font-semibold text-cyan-800 dark:text-cyan-300 mb-4">Formación académica</h3>
                        <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                            <li className="flex items-start"><Award className="h-5 w-5 mr-3 mt-1 text-cyan-500 flex-shrink-0" /><span><strong>Licenciada en Veterinaria</strong> por la Universidad de Córdoba (Premio Extraordinario Fin de Carrera)</span></li>
                            <li className="flex items-start"><Award className="h-5 w-5 mr-3 mt-1 text-cyan-500 flex-shrink-0" /><span><strong>Diploma en Cirugía y Anestesia</strong> de Pequeños Animales (UAB Barcelona)</span></li>
                            <li className="flex items-start"><Award className="h-5 w-5 mr-3 mt-1 text-cyan-500 flex-shrink-0" /><span><strong>Especialista en Endoscopia y Cirugía de Mínima Invasión</strong> (Universidad de Extremadura)</span></li>
                            <li className="flex items-start"><Award className="h-5 w-5 mr-3 mt-1 text-cyan-500 flex-shrink-0" /><span>Licenciatura en Dirección y Administración de Empresas (UAN)</span></li>
                            <li className="flex items-start"><Award className="h-5 w-5 mr-3 mt-1 text-cyan-500 flex-shrink-0" /><span>Directora de Instalaciones de Radiodiagnóstico</span></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-cyan-800 dark:text-cyan-300 mb-4">Afiliaciones profesionales</h3>
                        <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                            <li className="flex items-start"><Users className="h-5 w-5 mr-3 mt-1 text-cyan-500 flex-shrink-0" /><span>Cofundadora de <strong>MINIMAL</strong> (Asociación Ibérica de Cirugía Veterinaria de Mínima Invasión)</span></li>
                            <li className="flex items-start"><Users className="h-5 w-5 mr-3 mt-1 text-cyan-500 flex-shrink-0" /><span>Ponente y profesora en congresos y cursos de cirugía MIS</span></li>
                            <li className="flex items-start"><Users className="h-5 w-5 mr-3 mt-1 text-cyan-500 flex-shrink-0" /><span>Miembro activo de <strong>AVEPA</strong> y <strong>ISFM</strong></span></li>
                            <li className="flex items-start"><Users className="h-5 w-5 mr-3 mt-1 text-cyan-500 flex-shrink-0" /><span>Vinculada a <strong>ESVC</strong> (European Society of Veterinary Cardiology)</span></li>
                        </ul>
                    </div>
                </div>
                 <p className="mt-8 text-center text-lg bg-cyan-50 dark:bg-cyan-900/50 p-4 rounded-lg text-cyan-800 dark:text-cyan-200">
                    Fue de las primeras en introducir la laparoscopia en la práctica veterinaria nacional a principios de la década de 2010, siendo referente temprana de esta técnica.
                </p>
            </div>
        </Section>

        {/* Filosofía */}
        <Section className="bg-slate-50 dark:bg-slate-800/50">
            <div className="text-center">
                <h2 className="text-3xl font-bold text-cyan-900 dark:text-white">Filosofía del centro: Excelencia con empatía</h2>
                <p className="mt-4 text-lg max-w-3xl mx-auto text-slate-600 dark:text-slate-300">En CENDOVET nos guía una filosofía de excelencia clínica combinada con empatía premium. La Compasión, el Cuidado, la Comprensión, el Compromiso y la Calidad son los cinco pilares fundamentales.</p>
            </div>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 max-w-5xl mx-auto">
                <PhilosophyCard icon={HeartHandshake} title="Compasión" text="Tratamos a cada mascota con el mismo cariño que si fuese nuestra." />
                <PhilosophyCard icon={Microscope} title="Cuidado" text="Atención meticulosa en cada fase del tratamiento." />
                <PhilosophyCard icon={Users} title="Comprensión" text="Escuchamos y acompañamos a cada familia en todo momento." />
                <PhilosophyCard icon={Target} title="Compromiso" text="Dedicación inquebrantable con el bienestar del paciente." />
                <PhilosophyCard icon={Award} title="Calidad" text="La más alta excelencia médica en cada diagnóstico y cirugía." />
            </div>
        </Section>

        {/* Innovación y Logros */}
        <Section>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-3xl font-bold text-cyan-900 dark:text-white">Innovación y liderazgo en cirugía MIS</h2>
                    <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">En CENDOVET, la tecnología de vanguardia es parte fundamental de nuestra identidad.</p>
                    <ul className="mt-8 space-y-4">
                        <li className="flex items-start"><CheckCircle className="h-6 w-6 mr-3 mt-1 text-cyan-500 flex-shrink-0" /><span><strong>Láser Holmium:</strong> Primer centro privado en Andalucía con esta tecnología para litotricia.</span></li>
                        <li className="flex items-start"><CheckCircle className="h-6 w-6 mr-3 mt-1 text-cyan-500 flex-shrink-0" /><span><strong>Torres de Laparoscopia Karl Storz:</strong> Equipamiento de última generación para máxima precisión.</span></li>
                        <li className="flex items-start"><CheckCircle className="h-6 w-6 mr-3 mt-1 text-cyan-500 flex-shrink-0" /><span><strong>Endoscopios Olympus:</strong> Tecnología de alta definición para diagnóstico y tratamiento.</span></li>
                        <li className="flex items-start"><CheckCircle className="h-6 w-6 mr-3 mt-1 text-cyan-500 flex-shrink-0" /><span><strong>Fluoroscopia Digital:</strong> Sistema moderno para procedimientos guiados por imagen en tiempo real.</span></li>
                    </ul>
                </div>
                <div className="grid grid-cols-2 gap-6">
                    <StatCard icon={Star} value="2010" label="Pioneros en MIS" delay={0} />
                    <StatCard icon={Telescope} value="Nº 1" label="Tecnología Exclusiva" delay={0.1} />
                    <StatCard icon={BrainCircuit} value="+15" label="Años de Experiencia" delay={0.2} />
                    <StatCard icon={Group} value="100s" label="Casos de Éxito" delay={0.3} />
                </div>
            </div>
        </Section>

        {/* Equipo y Visión */}
        <Section className="bg-slate-50 dark:bg-slate-800/50">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-cyan-900 dark:text-white">Nuestro equipo y visión de futuro</h2>
                <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
                    Aunque la Dra. Gato es el rostro y liderazgo médico, CENDOVET cuenta con un equipo multidisciplinar que comparte su pasión por la excelencia. Colaboramos con especialistas externos de primer nivel cuando el caso lo requiere.
                </p>
                <p className="mt-6 text-xl font-semibold text-cyan-800 dark:text-cyan-200">
                    "Nuestra misión final es mejorar la vida de las mascotas y sus familias mediante una atención veterinaria especializada, humana y de confianza."
                </p>
                <Button asChild size="lg" className="mt-8">
                    <Link to="/contacto">Contacta con nuestro equipo</Link>
                </Button>
            </div>
        </Section>
      </div>
    </>
  );
};

export default SobreCendovetPage;