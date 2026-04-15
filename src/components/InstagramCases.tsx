import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, ExternalLink, PlayCircle } from 'lucide-react';
import { instagramCasesData, InstagramCase } from '@/data/instagramCasesData';

interface InstagramCasesProps {
  serviceKey: string;
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: 'easeOut' as const },
  }),
};

const InstagramCases: React.FC<InstagramCasesProps> = ({ serviceKey }) => {
  const cases: InstagramCase[] | undefined = instagramCasesData[serviceKey];

  if (!cases || cases.length === 0) return null;

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-rose-50 px-4 py-1.5 text-sm font-semibold text-pink-600 ring-1 ring-inset ring-pink-500/20 mb-4">
            <Instagram className="h-4 w-4" />
            Casos Clínicos Reales
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
            Casos de Éxito en Vídeo
          </h2>
          <p className="mt-3 text-lg leading-8 text-slate-600">
            Resultados reales documentados en nuestro Instagram. Descubre cómo hemos ayudado a estos pacientes.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {cases.map((caseItem, index) => (
            <motion.a
              key={index}
              href={caseItem.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="group relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/10 hover:border-teal-300"
            >
              {/* Emoji badge */}
              <div className="absolute -top-3 -right-3 text-2xl bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md border border-slate-200">
                {caseItem.emoji}
              </div>

              <div>
                {/* Pet name tag */}
                {caseItem.petName && (
                  <span className="inline-block text-xs font-bold uppercase tracking-wider text-teal-600 mb-2">
                    🐾 {caseItem.petName}
                  </span>
                )}

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-800 group-hover:text-teal-600 transition-colors leading-snug">
                  {caseItem.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-relaxed text-slate-600 line-clamp-4">
                  {caseItem.description}
                </p>
              </div>

              {/* CTA */}
              <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-pink-600 group-hover:text-pink-500 transition-colors">
                <PlayCircle className="h-5 w-5" />
                Ver en Instagram
                <ExternalLink className="h-3.5 w-3.5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Follow CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://www.instagram.com/cvcampogibraltar/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-3 text-sm font-bold text-white shadow-lg hover:shadow-xl hover:from-pink-600 hover:to-purple-700 transition-all duration-300 hover:-translate-y-0.5"
          >
            <Instagram className="h-5 w-5" />
            Síguenos en @cvcampogibraltar
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramCases;
