export interface SEODataEntry {
  title: string;
  description: string;
  keywords: string;
  canonicalUrl: string;
  ogImage?: string;
  ogType?: string;
}

export interface SEODataCollection {
  [key: string]: SEODataEntry;
}

const BASE_URL = 'https://cendovet.lovable.app';

export const seoData: SEODataCollection = {
  home: {
    title: 'CENDOVET - Cirugía Veterinaria Mínimamente Invasiva en España',
    description: 'Centro de referencia en cirugía veterinaria mínimamente invasiva. Laparoscopia, endoscopia, litotricia láser y fluoroscopia en Campo de Gibraltar.',
    keywords: 'cirugía mínimamente invasiva veterinaria, laparoscopia veterinaria, endoscopia veterinaria, litotricia láser, fluoroscopia veterinaria, cirugía veterinaria Campo de Gibraltar, Dra. Eva Gato',
    canonicalUrl: `${BASE_URL}/`,
    ogType: 'website',
  },

  laparoscopia: {
    title: 'Laparoscopia Veterinaria | Cirugía MIS sin cicatrices | CENDOVET',
    description: 'Laparoscopia veterinaria de referencia. Esterilización, gastropexia, biopsias con incisiones mínimas. Recuperación rápida y menor dolor postoperatorio.',
    keywords: 'laparoscopia veterinaria, cirugía laparoscópica perros, esterilización laparoscópica, gastropexia, cirugía mínimamente invasiva',
    canonicalUrl: `${BASE_URL}/servicios/laparoscopia`,
  },

  endoscopia: {
    title: 'Endoscopia Veterinaria | Diagnóstico y Tratamiento | CENDOVET',
    description: 'Endoscopia veterinaria para cuerpos extraños, biopsias y diagnóstico. Gastroscopia y colonoscopia con máxima precisión. Sin incisiones.',
    keywords: 'endoscopia veterinaria, gastroscopia perros, endoscopia gatos, extracción cuerpo extraño, biopsia endoscópica',
    canonicalUrl: `${BASE_URL}/servicios/endoscopia`,
  },

  litotricia: {
    title: 'Litotricia Láser Veterinaria | Tratamiento Cálculos | CENDOVET',
    description: 'Litotricia láser veterinaria única en Andalucía. Eliminación de cálculos urinarios sin cirugía. Tecnología de punta para gatos y perros.',
    keywords: 'litotricia láser veterinaria, cálculos urinarios perros, litotricia láser gatos, urolitiasis veterinaria, Andalucía',
    canonicalUrl: `${BASE_URL}/servicios/litotricia-laser`,
  },

  fluoroscopia: {
    title: 'Fluoroscopia Veterinaria | Diagnóstico Avanzado | CENDOVET',
    description: 'Fluoroscopia veterinaria para diagnóstico dinámico. Evaluación funcional del sistema digestivo, respiratorio y musculoesquelético en tiempo real.',
    keywords: 'fluoroscopia veterinaria, radiología dinámica, diagnóstico fluoroscópico, imagen veterinaria avanzada',
    canonicalUrl: `${BASE_URL}/servicios/fluoroscopia`,
  },

  cardiologia: {
    title: 'Cardiología Veterinaria | Ecocardiografía y Diagnóstico | CENDOVET',
    description: 'Cardiología veterinaria especializada. Ecocardiografía, Doppler, diagnóstico de arritmias y enfermedades valvulares en perros y gatos.',
    keywords: 'cardiología veterinaria, ecocardiografía perros, Doppler cardiaco, enfermedades cardíacas gatos, diagnóstico cardíaco',
    canonicalUrl: `${BASE_URL}/servicios/cardiologia`,
  },

  ecografia: {
    title: 'Ecografía Veterinaria | Diagnóstico por Imagen | CENDOVET',
    description: 'Ecografía veterinaria avanzada para diagnóstico de órganos internos. Ecocardiografía, ecografía abdominal y especializada con última tecnología.',
    keywords: 'ecografía veterinaria, diagnóstico por imagen, ecografía abdominal perros, ultrasonografía, ecocardiografía',
    canonicalUrl: `${BASE_URL}/servicios/ecografia`,
  },

  cirugia_mis: {
    title: 'Cirugía Mínimamente Invasiva Veterinaria | MIS | CENDOVET',
    description: 'Cirugía mínimamente invasiva veterinaria. Procedimientos quirúrgicos con menor invasión y recuperación rápida. Referencia en España.',
    keywords: 'cirugía mínimamente invasiva veterinaria, cirugía MIS, procedimientos quirúrgicos avanzados, cirugía de referencia',
    canonicalUrl: `${BASE_URL}/servicios/cirugia-mis`,
  },

  medicina_felina: {
    title: 'Medicina Felina Especializada | Cirugía MIS para Gatos | CENDOVET',
    description: 'Medicina felina especializada con técnicas MIS. Cirugía, diagnóstico y tratamiento adaptado a las necesidades específicas de gatos.',
    keywords: 'medicina felina especializada, cirugía gatos, endoscopia felina, diagnóstico gatos, enfermedades felinas',
    canonicalUrl: `${BASE_URL}/servicios/medicina-felina`,
  },

  traumatologia: {
    title: 'Traumatología Veterinaria | Fracturas y Lesiones | CENDOVET',
    description: 'Traumatología veterinaria especializada. Tratamiento de fracturas, luxaciones y lesiones musculoesqueléticas con técnicas avanzadas.',
    keywords: 'traumatología veterinaria, fracturas perros, lesiones musculoesqueléticas, cirugía traumatológica, ortopedia veterinaria',
    canonicalUrl: `${BASE_URL}/servicios/traumatologia`,
  },

  neurologia: {
    title: 'Neurología Veterinaria | Diagnóstico y Tratamiento | CENDOVET',
    description: 'Neurología veterinaria especializada. Diagnóstico y tratamiento de enfermedades neurológicas. Equipo diagnóstico avanzado.',
    keywords: 'neurología veterinaria, enfermedades neurológicas perros, diagnóstico neurológico, MRI veterinario, convulsiones',
    canonicalUrl: `${BASE_URL}/servicios/neurologia`,
  },

  para_clinicas: {
    title: 'Para Clínicas Veterinarias | Derivación de Referencia | CENDOVET',
    description: 'Somos tu centro de referencia en cirugía MIS. Derivación de casos, protocolos conjuntos y apoyo especializado para clínicas veterinarias.',
    keywords: 'derivación veterinaria, clínicas de referencia, cirugía de referencia, colaboración veterinaria, protocolos derivación',
    canonicalUrl: `${BASE_URL}/para-clinicas`,
  },

  referir_caso: {
    title: 'Referir un Caso | Derivación Especializada | CENDOVET',
    description: 'Refiere tu caso a CENDOVET. Sistema ágil de derivación, seguimiento coordinado y comunicación directa con especialistas MIS.',
    keywords: 'referir caso veterinario, derivación de casos, sistema de referencia, consulta especializada, seguimiento de casos',
    canonicalUrl: `${BASE_URL}/para-clinicas/referir-caso`,
  },

  blog: {
    title: 'Blog Veterinario | Artículos MIS y Medicina Especializada | CENDOVET',
    description: 'Blog veterinario con artículos sobre cirugía MIS, endoscopia, cardiología y casos clínicos. Educación para veterinarios y propietarios.',
    keywords: 'blog veterinario, artículos cirugía MIS, casos clínicos, medicina veterinaria, educación veterinaria, endoscopia',
    canonicalUrl: `${BASE_URL}/blog`,
  },

  sobre: {
    title: 'Sobre CENDOVET | Dra. Eva G. Gato | Centro de Referencia MIS',
    description: 'Conoce CENDOVET y a la Dra. Eva G. Gato, especialista en cirugía mínimamente invasiva veterinaria. Centro de referencia en España.',
    keywords: 'Dra. Eva Gato, CENDOVET, especialista MIS, cirugía mínimamente invasiva, centro de referencia veterinario',
    canonicalUrl: `${BASE_URL}/sobre-cendovet`,
  },

  contacto: {
    title: 'Contacto CENDOVET | Clínica Veterinaria Campo de Gibraltar',
    description: 'Contacta con CENDOVET en Campo de Gibraltar. Consultas, derivaciones y emergencias. Ubicación, teléfono y formulario de contacto.',
    keywords: 'contacto CENDOVET, veterinario Campo de Gibraltar, clínica veterinaria, teléfono, dirección, formulario contacto',
    canonicalUrl: `${BASE_URL}/contacto`,
  },
};

export default seoData;
