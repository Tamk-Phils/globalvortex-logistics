import React from 'react';

const JsonLd = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Vortex Global",
    "url": "https://globalvortexlogistics.com",
    "logo": "https://globalvortexlogistics.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-800-VORTEX-G",
      "contactType": "customer service",
      "areaServed": "Worldwide",
      "availableLanguage": ["en", "es", "fr"]
    },
    "sameAs": [
      "https://facebook.com/vortexglobal",
      "https://twitter.com/vortexglobal",
      "https://linkedin.com/company/vortexglobal"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Vortex Global Logistics",
    "url": "https://globalvortexlogistics.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://globalvortexlogistics.com/tracking?id={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
};

export default JsonLd;
