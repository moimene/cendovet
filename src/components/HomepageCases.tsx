import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, ArrowRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface FeaturedCase {
  title: string;
  description: string;
  petName?: string;
  specialty: string;
  specialtyColor: string;
  serviceLink: string;
  instagramUrl: string;
}

const featuredCases: FeaturedCase[] = [
  {
    title: "Extracción de anzuelo del esófago sin cirugía",
    description: "Kiara, una cachorrita, se tragó un anzuelo. Mediante endoscopia, lo extrajimos del esófago sin incisión alguna. Sin dolor, sin puntos, a casa el mismo día.",
    petName: "Kiara",
    specialty: "Endoscopia",
    specialtyColor: "bg-rose-600",
    serviceLink: "/servicios/endoscopia",
    instagramUrl: "https://www.instagram.com/p/DSMgZi3CKN6/",
  },
  {
    title: "Litotricia láser: piedras pulverizadas sin bisturí",
    description: "Pocholo sufría una obstrucción urinaria grave por cálculos. La litotricia láser nos permitió pulverizarlos dentro de la vejiga sin abrir.",
    petName: "Pocholo",
    specialty: "Litotricia Láser",
    specialtyColor: "bg-amber-600",
    serviceLink: "/servicios/litotricia-laser",
    instagramUrl: "https://www.instagram.com/p/DWqV038iHQx/",
  },
  {
    title: "Stent traqueal: recuperar el aliento",
    description: "El colapso traqueal impedía respirar con normalidad. Guiados por fluoroscopia, colocamos un stent con precisión milimétrica.",
    specialty: "Fluoroscopia",
    specialtyColor: "bg-emerald-600",
    serviceLink: "/servicios/fluoroscopia",
    instagramUrl: "https://www.instagram.com/p/DWor0MHCF7p/",
  },
  {
    title: "Extracción de filarias del corazón",
    description: "Mediante intervencionismo guiado por fluoroscopia y ecografía, extrajimos gusanos del corazón de forma mínimamente invasiva.",
    specialty: "Cardiología",
    specialtyColor: "bg-red-600",
    serviceLink: "/servicios/cardiologia",
    instagramUrl: "https://www.instagram.com/p/DVWQ-d8CIy7/",
  },
  {
    title: "Castración laparoscópica: 2 incisiones de 5mm",
    description: "Sofía, una chihuahua, fue esterilizada por laparoscopia. Incisiones milimétricas, mínimo dolor, recuperación casi inmediata.",
    petName: "Sofía",
    specialty: "Laparoscopia",
    specialtyColor: "bg-teal-600",
    serviceLink: "/servicios/laparoscopia",
    instagramUrl: "https://www.instagram.com/p/DWor0MHCF7p/",
  },
  {
    title: "Tecnología 3D y 4K: cirugía de otra dimensión",
    description: "Hemos incorporado la plataforma RUBINA de Karl Storz con visión 3D y resolución 4K para los procedimientos más complejos.",
    specialty: "Innovación",
    specialtyColor: "bg-indigo-600",
    serviceLink: "/servicios/laparoscopia",
    instagramUrl: "https://www.instagram.com/p/DUr-f_4CJNl/",
  },
];

const HomepageCases: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header — left aligned */}
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">
            Casos que marcan la diferencia
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Cada caso es una historia real de recuperación. Cirugía mínimamente invasiva con resultados que hablan por sí solos.
          </p>
        </div>

        {/* Cases Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl">
          {featuredCases.map((caseItem, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="group flex flex-col bg-white border border-slate-100 rounded-lg p-6 hover:shadow-md transition-shadow duration-200"
            >
              {/* Specialty badge */}
              <span className={`self-start inline-block ${caseItem.specialtyColor} px-2.5 py-0.5 text-xs font-semibold text-white rounded-sm mb-3`}>
                {caseItem.specialty}
              </span>

              {/* Pet name */}
              {caseItem.petName && (
                <span className="text-xs font-semibold uppercase tracking-wider text-teal-600 mb-1">
                  {caseItem.petName}
                </span>
              )}

              <h3 className="text-base font-bold text-slate-800 leading-snug mb-2 group-hover:text-teal-700 transition-colors">
                {caseItem.title}
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed flex-1 mb-4">
                {caseItem.description}
              </p>

              {/* Actions */}
              <div className="flex items-center justify-between gap-2 pt-3 border-t border-slate-100">
                <a
                  href={caseItem.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Ver vídeo en Instagram (nueva ventana)"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-pink-600 hover:text-pink-700 transition-colors"
                >
                  <Instagram className="h-4 w-4" />
                  Ver vídeo
                </a>
                <Link
                  to={caseItem.serviceLink}
                  className="inline-flex items-center gap-1 text-sm font-medium text-teal-600 hover:text-teal-700 transition-colors"
                >
                  Saber más
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex flex-col sm:flex-row items-start gap-3">
          <a
            href="https://www.instagram.com/cvcampogibraltar/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ver más casos en Instagram (nueva ventana)"
            className="inline-flex items-center gap-2 bg-slate-800 px-6 py-3 text-sm font-semibold text-white rounded-lg hover:bg-slate-700 transition-colors"
          >
            <Instagram className="h-4 w-4" />
            Más casos en Instagram
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
          <Button asChild variant="outline" className="border-teal-200 text-teal-700 hover:bg-teal-50 px-6">
            <Link to="/contacto">
              Consulta tu caso
              <ArrowRight className="h-4 w-4 ml-1.5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HomepageCases;
