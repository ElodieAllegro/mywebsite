import { Helmet } from "react-helmet-async";

export default function SEO({
  title,
  description,
  ogImage = "https://www.ea-webagency.fr/og-cover.jpg",
  canonicalUrl = "https://www.ea-webagency.fr/",
  structuredData,
  noindex = false
}) {
  const fullTitle = title.includes("EA Web Agency")
    ? title
    : `${title} | EA Web Agency`;

  const robotsContent = noindex
    ? "noindex, nofollow"
    : "index, follow, max-image-preview:large";

  return (
    <Helmet>
      {/* Core SEO */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robotsContent} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:locale" content="fr_FR" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="EA Web Agency" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content="EA Web Agency - Création et refonte de site web" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* JSON-LD */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
}
