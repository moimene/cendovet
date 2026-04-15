import React from 'react';
import SEOHead from '@/components/SEOHead';
import { seoData } from '@/data/seoData';
import { organizationSchema, breadcrumbSchema } from '@/data/schemaData';
import draEvaSobre from '@/assets/dra_eva_sobre.png';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const SobreCendovetPage = () => {
  return (
    <>
      <SEOHead
        {...seoData.sobre}
        jsonLd={[
          organizationSchema,
          breadcrumbSchema([
            { name: 'Inicio', url: 'https://cendovet.lovable.app/' },
            { name: 'Sobre CENDOVET', url: 'https://cendovet.lovable.app/sobre-cendovet' }
          ])
        ]}
      />

      <div className="bg-background">
        {/* Hero — asymmetric, photo-forward */}
        <section className="bg-muted py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
              <div className="lg:col-span-3">
                <p className="text-sm font-semibold tracking-widest uppercase text-primary">Cirugía MIS con rostro propio</p>
                <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Dra. Eva García Gato</h1>
                <p className="mt-6 text-lg leading-8 text-muted-foreground">
                  Directora médica de CENDOVET y pionera de la cirugía veterinaria de mínima invasión en España. Con más de 15 años de experiencia, ha posicionado a CENDOVET como un centro de referencia nacional, combinando excelencia técnica con un trato cercano a cada paciente.
                </p>
                <p className="mt-4 text-lg font-semibold text-primary">Tu mascota está en manos expertas.</p>
              </div>
              <div className="lg:col-span-2">
                <img
                  alt="Dra. Eva García Gato, directora médica de CENDOVET"
                  className="w-full max-w-sm mx-auto h-auto rounded-2xl shadow-xl aspect-square object-cover"
                  src={draEvaSobre}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Biografía */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-foreground">Biografía profesional</h2>
            <p className="mt-3 text-muted-foreground">La Dra. Eva García Gato encarna la experiencia, la innovación y el compromiso en cada paciente.</p>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">Formación académica</h3>
                <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                  <li><strong className="text-foreground">Licenciada en Veterinaria</strong> por la Universidad de Córdoba (Premio Extraordinario Fin de Carrera)</li>
                  <li><strong className="text-foreground">Diploma en Cirugía y Anestesia</strong> de Pequeños Animales (UAB Barcelona)</li>
                  <li><strong className="text-foreground">Especialista en Endoscopia y Cirugía de Mínima Invasión</strong> (Universidad de Extremadura)</li>
                  <li>Licenciatura en Dirección y Administración de Empresas (UAN)</li>
                  <li>Directora de Instalaciones de Radiodiagnóstico</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">Afiliaciones profesionales</h3>
                <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                  <li>Cofundadora de <strong className="text-foreground">MINIMAL</strong> (Asociación Ibérica de Cirugía Veterinaria de Mínima Invasión)</li>
                  <li>Ponente y profesora en congresos y cursos de cirugía MIS</li>
                  <li>Miembro activo de <strong className="text-foreground">AVEPA</strong> y <strong className="text-foreground">ISFM</strong></li>
                  <li>Vinculada a <strong className="text-foreground">ESVC</strong> (European Society of Veterinary Cardiology)</li>
                </ul>
              </div>
            </div>

            <p className="mt-10 text-sm bg-muted p-4 rounded-lg text-muted-foreground border border-border">
              Fue de las primeras en introducir la laparoscopia en la práctica veterinaria nacional a principios de la década de 2010, siendo referente temprana de esta técnica.
            </p>
          </div>
        </section>

        {/* Filosofía — text-only, no icons */}
        <section className="bg-muted py-16 sm:py-24 border-y border-border">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-foreground">Filosofía del centro</h2>
            <p className="mt-3 text-muted-foreground">Excelencia clínica combinada con empatía. Cinco pilares nos guían.</p>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8">
              {[
                { title: "Compasión", text: "Tratamos a cada mascota con el mismo cariño que si fuese nuestra." },
                { title: "Cuidado", text: "Atención meticulosa en cada fase del tratamiento." },
                { title: "Comprensión", text: "Escuchamos y acompañamos a cada familia en todo momento." },
                { title: "Compromiso", text: "Dedicación inquebrantable con el bienestar del paciente." },
                { title: "Calidad", text: "La más alta excelencia médica en cada diagnóstico y cirugía." },
              ].map((item) => (
                <div key={item.title}>
                  <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Innovación — clean list, stats as text */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-3xl font-bold text-foreground">Innovación y liderazgo en cirugía MIS</h2>
                <p className="mt-4 text-muted-foreground">En CENDOVET, la tecnología de vanguardia es parte fundamental de nuestra identidad.</p>
                <ul className="mt-8 space-y-4 text-sm text-muted-foreground">
                  <li><strong className="text-foreground">Láser Holmium</strong> — Primer centro privado en Andalucía con esta tecnología para litotricia.</li>
                  <li><strong className="text-foreground">Torres de Laparoscopia Karl Storz</strong> — Equipamiento de última generación para máxima precisión.</li>
                  <li><strong className="text-foreground">Endoscopios Olympus</strong> — Tecnología de alta definición para diagnóstico y tratamiento.</li>
                  <li><strong className="text-foreground">Fluoroscopia Digital</strong> — Sistema moderno para procedimientos guiados por imagen en tiempo real.</li>
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "2010", label: "Pioneros en MIS" },
                  { value: "Nº 1", label: "Tecnología exclusiva" },
                  { value: "+15", label: "Años de experiencia" },
                  { value: "100s", label: "Casos de éxito" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-muted p-6 rounded-lg border border-border">
                    <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Equipo CTA */}
        <section className="bg-primary py-16">
          <div className="container mx-auto px-4 max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-primary-foreground">Nuestro equipo y visión de futuro</h2>
            <p className="mt-4 text-primary-foreground/80 leading-relaxed">
              Aunque la Dra. Gato es el rostro y liderazgo médico, CENDOVET cuenta con un equipo multidisciplinar que comparte su pasión por la excelencia.
            </p>
            <p className="mt-4 text-lg font-semibold text-primary-foreground/90 italic">
              "Nuestra misión es mejorar la vida de las mascotas y sus familias mediante una atención veterinaria especializada, humana y de confianza."
            </p>
            <Button asChild size="lg" className="mt-8 bg-white text-primary hover:bg-white/90 font-semibold">
              <Link to="/contacto">Contacta con nuestro equipo</Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default SobreCendovetPage;
