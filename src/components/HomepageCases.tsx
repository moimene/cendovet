import React from 'react';
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
    description: "Plataforma RUBINA de Karl Storz con visión 3D y resolución 4K. Percepción de profundidad real para los procedimientos más complejos.",
    specialty: "Innovación",
    specialtyColor: "bg-indigo-600",
    serviceLink: "/servicios/laparoscopia",
    instagramUrl: "https://www.instagram.com/p/DUr-f_4CJNl/",
  },
];

const HomepageCases: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-xl mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">
            Casos que marcan la diferencia
          </h2>
          <p className="text-slate-600">
            Cada caso es una historia real. Cirugía mínimamente invasiva con resultados documentados en vídeo.
          </p>
        </div>

        {/* Cases Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredCases.map((caseItem, index) => (
            <article
              key={index}
              className="group flex flex-col rounded-lg border border-slate-200 bg-white overflow-hidden"
            >
              <div className={`h-1 w-full ${caseItem.specialtyColor}`} />
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-4">
                  <span className={`inline-block rounded-full ${caseItem.specialtyColor} px-3 py-1 text-xs font-semibold text-white`}>
                    {caseItem.specialty}
                  </span>
                  {caseItem.petName && (
                    <span className="text-xs font-medium text-slate-500">
                      Paciente: {caseItem.petName}
                    </span>
                  )}
                </div>

                <h3 className="text-base font-bold text-slate-800 leading-snug mb-3 group-hover:text-teal-600 transition-colors">
                  {caseItem.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed flex-1">
                  {caseItem.description}
                </p>

                <div className="mt-5 flex items-center justify-between pt-4 border-t border-slate-100">
                  <a
                    href={caseItem.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Ver vídeo en Instagram (nueva ventana)"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-500 hover:text-pink-600 transition-colors"
                  >
                    <Instagram className="h-4 w-4" />
                    Ver vídeo
                  </a>
                  <Link
                    to={caseItem.serviceLink}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-teal-600 hover:text-teal-500 transition-colors"
                  >
                    Saber más <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 flex flex-col sm:flex-row items-center gap-4">
          <a
            href="https://www.instagram.com/cvcampogibraltar/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-pink-600 transition-colors"
          >
            <Instagram className="h-5 w-5" />
            Más casos en @cvcampogibraltar
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
          <Button asChild variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50">
            <Link to="/contacto">
              Consulta tu caso <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HomepageCases;
