import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

export default function SEO() {
  const [meta, setMeta] = useState<any>(null);

  useEffect(() => {
    fetch("/siteMeta.json")
      .then(res => res.json())
      .then(data => setMeta(data));
  }, []);

  if (!meta) return null;

  return (
    <Helmet>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <link rel="canonical" href={meta.url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:url" content={meta.url} />
      <meta property="og:image" content={meta.ogImage} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: meta.name,
          address: meta.address,
          telephone: meta.phone,
          url: meta.url,
          logo: meta.logo
        })}
      </script>
    </Helmet>
  );
}