import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, PlayCircle, ExternalLink, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface FeaturedCase {
  title: string;
  description: string;
  petName?: string;
  emoji: string;
  specialty: string;
  specialtyColor: string;
  serviceLink: string;
  instagramUrl: string;
}

const IG_BASE = "https://www.instagram.com/cvcampogibraltar/";

const featuredCases: FeaturedCase[] = [
  {
    title: "Extracción de anzuelo del esófago sin cirugía",
    description: "Kiara, una cachorrita, se tragó un anzuelo. Mediante endoscopia, lo extrajimos del esófago sin incisión alguna. Sin dolor, sin puntos, a casa el mismo día.",
    petName: "Kiara",
    emoji: "🪝",
    specialty: "Endoscopia",
    specialtyColor: "from-rose-500 to-pink-600",
    serviceLink: "/servicios/endoscopia",
    instagramUrl: IG_BASE,
  },
  {
    title: "Litotricia láser: piedras pulverizadas sin bisturí",
    description: "Pocholo sufría una obstrucción urinaria grave por cálculos. La litotricia láser nos permitió pulverizarlos dentro de la vejiga sin abrir, restaurando el flujo urinario en minutos.",
    petName: "Pocholo",
    emoji: "💎",
    specialty: "Litotricia Láser",
    specialtyColor: "from-amber-500 to-orange-600",
    serviceLink: "/servicios/litotricia-laser",
    instagramUrl: IG_BASE,
  },
  {
    title: "Stent traqueal: recuperar el aliento",
    description: "El colapso traqueal impedía respirar con normalidad. Guiados por fluoroscopia en tiempo real, colocamos un stent con precisión milimétrica para devolver la calidad de vida al paciente.",
    emoji: "🌬️",
    specialty: "Fluoroscopia",
    specialtyColor: "from-lime-500 to-green-600",
    serviceLink: "/servicios/fluoroscopia",
    instagramUrl: IG_BASE,
  },
  {
    title: "Extracción de filarias del corazón",
    description: "Mediante intervencionismo guiado por fluoroscopia y ecografía, extrajimos gusanos del corazón de forma mínimamente invasiva. Un procedimiento pionero en el Campo de Gibraltar.",
    emoji: "🫀",
    specialty: "Cardiología",
    specialtyColor: "from-red-500 to-rose-600",
    serviceLink: "/servicios/cardiologia",
    instagramUrl: IG_BASE,
  },
  {
    title: "Castración laparoscópica: 2 incisiones de 5mm",
    description: "Sofía, una chihuahua, fue esterilizada por laparoscopia. Incisiones milimétricas, mínimo dolor, recuperación casi inmediata. La diferencia entre cirugía tradicional y MIS es abismal.",
    petName: "Sofía",
    emoji: "🐕",
    specialty: "Laparoscopia",
    specialtyColor: "from-cyan-500 to-blue-600",
    serviceLink: "/servicios/laparoscopia",
    instagramUrl: IG_BASE,
  },
  {
    title: "Tecnología 3D y 4K: cirugía de otra dimensión",
    description: "Hemos incorporado la plataforma RUBINA de Karl Storz con visión 3D y resolución 4K. Percepción de profundidad real para los procedimientos más complejos y mayor seguridad.",
    petName: "Trufa",
    emoji: "🖥️",
    specialty: "Innovación",
    specialtyColor: "from-violet-500 to-purple-600",
    serviceLink: "/servicios/laparoscopia",
    instagramUrl: IG_BASE,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
  }),
};

const HomepageCases: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="max-w-3xl mx-auto text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 px-5 py-2 text-sm font-bold text-cyan-600 dark:text-cyan-400 ring-1 ring-inset ring-cyan-500/20 mb-5">
            <PlayCircle className="h-4 w-4" />
            Casos Documentados
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-cyan-900 dark:text-white">
            Procedimientos que{' '}
            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
              marcan la diferencia
            </span>
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Cada caso es una historia real de recuperación. Cirugía mínimamente invasiva con resultados que hablan por sí solos.
          </p>
        </motion.div>

        {/* Cases Grid — 2 cols on md, 3 on lg */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {featuredCases.map((caseItem, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="group relative flex flex-col rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/80 shadow-sm hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              {/* Specialty gradient bar */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${caseItem.specialtyColor}`} />

              <div className="p-6 flex flex-col flex-1">
                {/* Top row: specialty badge + emoji */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r ${caseItem.specialtyColor} px-3 py-1 text-xs font-bold text-white shadow-sm`}>
                    {caseItem.specialty}
                  </span>
                  <span className="text-2xl">{caseItem.emoji}</span>
                </div>

                {/* Pet name */}
                {caseItem.petName && (
                  <span className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-1.5">
                    🐾 {caseItem.petName}
                  </span>
                )}

                {/* Title */}
                <h3 className="text-lg font-bold text-cyan-900 dark:text-white leading-snug mb-3 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  {caseItem.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed flex-1">
                  {caseItem.description}
                </p>

                {/* Actions */}
                <div className="mt-5 flex items-center justify-between gap-2 pt-4 border-t border-slate-100 dark:border-slate-700/50">
                  <a
                    href={caseItem.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-pink-600 dark:text-pink-400 hover:text-pink-500 transition-colors"
                  >
                    <Instagram className="h-4 w-4" />
                    Ver vídeo
                    <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                  <Link
                    to={caseItem.serviceLink}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 transition-colors"
                  >
                    Saber más
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href="https://www.instagram.com/cvcampogibraltar/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg hover:shadow-xl hover:from-pink-600 hover:to-purple-700 transition-all duration-300 hover:-translate-y-0.5"
          >
            <Instagram className="h-5 w-5" />
            Más casos en @cvcampogibraltar
          </a>
          <Button asChild variant="outline" className="rounded-full border-cyan-300 text-cyan-700 hover:bg-cyan-50 dark:border-cyan-600 dark:text-cyan-400 dark:hover:bg-cyan-900/30 px-7 py-3.5">
            <Link to="/contacto">
              Consulta tu caso
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HomepageCases;
