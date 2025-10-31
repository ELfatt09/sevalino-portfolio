import React from "react";
import { Helmet } from "react-helmet-async";
import icon from '../assets/favicon.svg';

const SEO = ({
  title,
  description,
  name,
  type,
  url,
  image
}) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: name,
    url: url,
    description: description,
    email: "mailto:sevalino.elfata@gmail.com",
    sameAs: [
      "https://sevalinoelfata.com",
      "https://github.com/ELfatt09",
      "https://www.linkedin.com/in/sevalino-elfata-31755030a/",
      "https://www.instagram.com/sevelfatt.dev/"
    ],
    worksFor: {
      "@type": "Organization",
      name: "Sevalino Elfata Portfolio",
      url: "https://sevalinoelfata.com"
    }
  };

  return (
    <Helmet>
      {/* Basic SEO */}
          <title>{title}</title>
    <link rel="icon" type="image/svg+xml" href={icon} />
      <meta name="description" content={description} />
      <meta name="author" content={name} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="id" />

      {/* Open Graph (Facebook, LinkedIn, etc.) */}
      <meta property="og:type" content={type || "website"} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {url && <meta property="og:url" content={url} />}
      {image && <meta property="og:image" content={image} />}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}

      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
};

export default SEO;
