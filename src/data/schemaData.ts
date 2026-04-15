/**
 * JSON-LD Structured Data for CENDOVET
 * Provides schema.org compliant structured data for SEO and Rich Snippets
 */

// Types for structured data
interface SchemaContext {
  "@context": string;
}

interface PostalAddress {
  "@type": "PostalAddress";
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  addressCountry: string;
}

interface GeoCoordinates {
  "@type": "GeoCoordinates";
  latitude: number;
  longitude: number;
}

interface Person {
  "@type": "Person";
  name: string;
  jobTitle: string;
  description?: string;
}

interface BreadcrumbItem {
  "@type": "ListItem";
  position: number;
  name: string;
  item: string;
}

interface BreadcrumbList extends SchemaContext {
  "@type": "BreadcrumbList";
  itemListElement: BreadcrumbItem[];
}

interface FAQPageSchema extends SchemaContext {
  "@type": "FAQPage";
  mainEntity: Array<{
    "@type": "Question";
    name: string;
    acceptedAnswer: {
      "@type": "Answer";
      text: string;
    };
  }>;
}

interface ArticleSchema extends SchemaContext {
  "@type": "Article";
  headline: string;
  description: string;
  image?: string;
  datePublished: string;
  dateModified: string;
  author: Person;
  publisher: {
    "@type": "Organization";
    name: string;
    logo?: {
      "@type": "ImageObject";
      url: string;
    };
  };
  mainEntityOfPage?: {
    "@type": "WebPage";
    "@id": string;
  };
}

interface MedicalProcedureSchema extends SchemaContext {
  "@type": string[];
  name: string;
  description: string;
  url: string;
  provider?: {
    "@type": string[];
    name: string;
  };
}

interface OrganizationSchema extends SchemaContext {
  "@type": string[];
  name: string;
  url: string;
  telephone: string;
  email: string;
  description: string;
  address: PostalAddress;
  geo: GeoCoordinates;
  sameAs: string[];
  founder: Person;
  medicalSpecialty: string[];
  priceRange: string;
  areaServed?: {
    "@type": "AdministrativeArea";
    name: string;
  };
  image?: string;
}

interface WebsiteSchema extends SchemaContext {
  "@type": "WebSite";
  name: string;
  url: string;
  potentialAction?: {
    "@type": "SearchAction";
    target: {
      "@type": "EntryPoint";
      urlTemplate: string;
    };
    "query-input"?: string;
  };
}

// CENDOVET Clinic Information
const CLINIC_INFO = {
  name: "CENDOVET - Centro de Endoscopia y Cirugía Mínimamente Invasiva Veterinaria",
  shortName: "CENDOVET",
  url: "https://cendovet.lovable.app",
  phone: "+34 856 560 168",
  email: "info@cendovet.es",
  description:
    "Centro especializado en endoscopia y cirugía mínimamente invasiva veterinaria. Único centro en Andalucía que ofrece litotricia láser para mascotas.",
  address: {
    street: "Campo de Gibraltar",
    locality: "Algeciras",
    region: "Cádiz",
    postalCode: "11207",
    country: "ES",
    countryName: "Spain",
  },
  geo: {
    latitude: 36.1892,
    longitude: -5.3549,
  },
  instagram: "https://www.instagram.com/cvcampogibraltar/",
  leader: {
    name: "Dra. Eva G. Gato",
    title: "Directora y Cirujana Veterinaria MIS",
    description: "Especialista en Cirugía Mínimamente Invasiva Veterinaria",
  },
  services: [
    "Laparoscopia",
    "Endoscopia",
    "Litotricia Láser",
    "Fluoroscopia",
    "Cardiología",
    "Ecografía",
  ],
};

/**
 * Organization Schema - Combined VeterinaryCare and Organization
 * Provides comprehensive information about CENDOVET for search engines
 */
export const organizationSchema: OrganizationSchema = {
  "@context": "https://schema.org",
  "@type": ["VeterinaryCare", "MedicalBusiness"],
  name: CLINIC_INFO.name,
  url: CLINIC_INFO.url,
  telephone: CLINIC_INFO.phone,
  email: CLINIC_INFO.email,
  description: CLINIC_INFO.description,
  image: `${CLINIC_INFO.url}/logo.png`,
  address: {
    "@type": "PostalAddress",
    streetAddress: CLINIC_INFO.address.street,
    addressLocality: CLINIC_INFO.address.locality,
    addressRegion: CLINIC_INFO.address.region,
    postalCode: CLINIC_INFO.address.postalCode,
    addressCountry: CLINIC_INFO.address.countryName,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: CLINIC_INFO.geo.latitude,
    longitude: CLINIC_INFO.geo.longitude,
  },
  sameAs: [CLINIC_INFO.instagram],
  founder: {
    "@type": "Person",
    name: CLINIC_INFO.leader.name,
    jobTitle: CLINIC_INFO.leader.title,
    description: CLINIC_INFO.leader.description,
  },
  medicalSpecialty: CLINIC_INFO.services,
  priceRange: "€€",
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Andalucía, Spain",
  },
};

/**
 * Website Schema - Provides search functionality information
 * Enables site-specific search in search results
 */
export const websiteSchema: WebsiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: CLINIC_INFO.shortName,
  url: CLINIC_INFO.url,
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${CLINIC_INFO.url}/search?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

/**
 * Breadcrumb Schema Factory
 * Creates breadcrumb navigation schema for improved navigation display in search results
 *
 * @param items Array of breadcrumb items with name and url
 * @returns BreadcrumbList schema
 */
export function breadcrumbSchema(
  items: Array<{ name: string; url: string }>
): BreadcrumbList {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * FAQ Schema Factory
 * Creates FAQ schema for frequently asked questions
 * Enables FAQ rich snippets in search results
 *
 * @param faqs Array of FAQ items with question and answer
 * @returns FAQPageSchema
 */
export function faqSchema(
  faqs: Array<{ question: string; answer: string }>
): FAQPageSchema {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/**
 * Article Schema Factory
 * Creates article/blog post schema with author and publisher information
 *
 * @param params Article metadata including title, description, dates, slug, and image
 * @returns ArticleSchema
 */
export function articleSchema(params: {
  title: string;
  description: string;
  datePublished: string;
  dateModified: string;
  slug: string;
  image?: string;
}): ArticleSchema {
  const articleUrl = `${CLINIC_INFO.url}/blog/${params.slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: params.title,
    description: params.description,
    image: params.image || `${CLINIC_INFO.url}/default-article-image.png`,
    datePublished: params.datePublished,
    dateModified: params.dateModified,
    author: {
      "@context": "https://schema.org",
      "@type": "Person",
      name: CLINIC_INFO.leader.name,
      jobTitle: CLINIC_INFO.leader.title,
      description: CLINIC_INFO.leader.description,
    },
    publisher: {
      "@type": "Organization",
      name: CLINIC_INFO.shortName,
      logo: {
        "@type": "ImageObject",
        url: `${CLINIC_INFO.url}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
  };
}

/**
 * Medical Procedure/Service Schema Factory
 * Creates schema for individual veterinary services and procedures
 * Combines MedicalProcedure and Service types for comprehensive information
 *
 * @param params Service information including name, description, and url
 * @returns MedicalProcedureSchema
 */
export function serviceSchema(params: {
  name: string;
  description: string;
  url: string;
}): MedicalProcedureSchema {
  return {
    "@context": "https://schema.org",
    "@type": ["MedicalProcedure", "Service"],
    name: params.name,
    description: params.description,
    url: `${CLINIC_INFO.url}${params.url}`,
    provider: {
      "@type": ["VeterinaryCare", "MedicalBusiness"],
      name: CLINIC_INFO.shortName,
    },
  };
}

// Pre-generated service schemas for all available services
export const serviceSchemas = {
  laparoscopia: serviceSchema({
    name: "Laparoscopia",
    description:
      "Cirugía mínimamente invasiva mediante técnicas laparoscópicas avanzadas",
    url: "/servicios/laparoscopia",
  }),
  endoscopia: serviceSchema({
    name: "Endoscopia",
    description:
      "Procedimientos endoscópicos diagnósticos y terapéuticos para animales",
    url: "/servicios/endoscopia",
  }),
  litotricia: serviceSchema({
    name: "Litotricia Láser",
    description:
      "Único centro en Andalucía que ofrece litotricia láser para mascotas",
    url: "/servicios/litotricia-laser",
  }),
  fluoroscopia: serviceSchema({
    name: "Fluoroscopia",
    description:
      "Fluoroscopia en tiempo real para procedimientos guiados con precisión",
    url: "/servicios/fluoroscopia",
  }),
  cardiologia: serviceSchema({
    name: "Cardiología Veterinaria",
    description:
      "Servicios especializados de cardiología para diagnóstico y tratamiento cardíaco",
    url: "/servicios/cardiologia",
  }),
  ecografia: serviceSchema({
    name: "Ecografía",
    description:
      "Ecografía de alta definición para diagnóstico por imagen veterinario",
    url: "/servicios/ecografia",
  }),
};

export default {
  organizationSchema,
  websiteSchema,
  breadcrumbSchema,
  faqSchema,
  articleSchema,
  serviceSchema,
  serviceSchemas,
};
