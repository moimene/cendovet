import { Helmet } from 'react-helmet';
import React from 'react';

export interface SEOHeadProps {
  title: string;
  description: string;
  canonicalUrl: string;
  ogImage?: string;
  ogType?: string;
  keywords?: string;
  jsonLd?: object | object[];
  noindex?: boolean;
  lang?: string;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  canonicalUrl,
  ogImage,
  ogType = 'website',
  keywords,
  jsonLd,
  noindex = false,
  lang = 'es',
}) => {
  const robotsContent = noindex ? 'noindex, follow' : 'index, follow';

  // Transform jsonLd array to @graph format if needed
  let jsonLdContent: string | null = null;
  if (jsonLd) {
    if (Array.isArray(jsonLd)) {
      jsonLdContent = JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': jsonLd,
      });
    } else {
      jsonLdContent = JSON.stringify(jsonLd);
    }
  }

  return (
    <Helmet>
      {/* HTML Language */}
      <html lang={lang} />

      {/* Title */}
      <title>{title}</title>

      {/* Meta Tags */}
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={robotsContent} />

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={ogType} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      <meta property="og:locale" content="es_ES" />
      <meta property="og:site_name" content="CENDOVET" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}

      {/* Font Preconnects */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />

      {/* Google Fonts Stylesheet */}
      <link
        href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />

      {/* JSON-LD Structured Data */}
      {jsonLdContent && (
        <script type="application/ld+json">{jsonLdContent}</script>
      )}
    </Helmet>
  );
};

export default SEOHead;
