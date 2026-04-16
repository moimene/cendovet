import React from 'react';
import { instagramCasesData, InstagramCase } from '@/data/instagramCasesData';

interface InstagramCasesProps {
  serviceKey: string;
}

const InstagramCases: React.FC<InstagramCasesProps> = ({ serviceKey }) => {
  const cases: InstagramCase[] | undefined = instagramCasesData[serviceKey];

  if (!cases || cases.length === 0) return null;

  return (
    <section className="py-16 sm:py-20 bg-white border-t border-slate-200">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">
            Casos Clínicos Reales
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Casos de Éxito
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Resultados documentados en nuestro Instagram. Descubre cómo hemos ayudado a estos pacientes.
          </p>
        </div>

        {/* Cards Grid - editorial style */}
        <div className="grid gap-px bg-slate-200 sm:grid-cols-2 lg:grid-cols-3">
          {cases.map((caseItem) => (
            <a
              key={caseItem.title}
              href={caseItem.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white p-8 hover:bg-slate-50 transition-colors"
            >
              <div className="space-y-4">
                {/* Pet name */}
                {caseItem.petName && (
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                    {caseItem.petName}
                  </p>
                )}

                {/* Title */}
                <h3 className="text-lg font-semibold text-slate-900 group-hover:text-primary transition-colors">
                  {caseItem.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-slate-600">
                  {caseItem.description}
                </p>

                {/* CTA */}
                <p className="text-sm font-medium text-primary pt-2">
                  Ver en Instagram &rarr;
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Follow CTA */}
        <div className="mt-12 pt-8 border-t border-slate-200">
          <a
            href="https://www.instagram.com/cvcampogibraltar/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-primary transition-colors"
          >
            Síguenos en @cvcampogibraltar &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramCases;
