import { Helmet } from "react-helmet-async";

const SEOHead = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Studio Arunaseya",
    "image": "",
    "description": "Professional photography studio in Kelaniya, Sri Lanka. Passport photos, photo printing, framing, and restoration services.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "17, Eksath Mawatha, Sinharamulla",
      "addressLocality": "Kelaniya",
      "postalCode": "11600",
      "addressCountry": "LK"
    },
    "telephone": "+94702284833",
    "email": "arunaseya48@gmail.com",
    "openingHours": "Mo-Su 08:00-20:00",
    "priceRange": "$$",
    "sameAs": [],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Photography Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Photo Printing"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Passport & ID Photos"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Photo Framing"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Photo Restoration"
          }
        }
      ]
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEOHead;
