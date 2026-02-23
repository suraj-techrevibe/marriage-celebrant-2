import { Helmet } from "react-helmet-async";
import data from "../../config/data.json";

const SEO = () => {
  const { business } = data;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: business.name,
    address: business.address,
    telephone: business.phone,
    url: business.website,
    logo: business.logo
  };

  return (
    <Helmet>
      <title>{business.name}</title>
      <meta name="description" content={business.description} />
      <link rel="canonical" href={business.website} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={business.name} />
      <meta property="og:description" content={business.description} />
      <meta property="og:url" content={business.website} />
      <meta property="og:image" content={business.ogImage} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;
