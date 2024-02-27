import { Html, Head, Main, NextScript } from "next/document";
import { Analytics } from "@vercel/analytics/react";

export default function Document() {
  const schemaMarkup = {
    "@context": "http://schema.org",
    "@type": "ProfessionalService",
    name: "Konten",
    image: "https://www.konten.dev/logo-black.svg",
    url: "https://www.konten.dev",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cape Town",
      addressRegion: "Western Cape",
      addressCountry: "ZA",
    },
    sameAs: [
      "https://www.facebook.com/konten.dev",
      "https://www.instagram.com/konten.dev",
      "https://www.linkedin.com/company/kontendev",
      "https://twitter.com/kontendev",
    ],
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "User Experience Design",
          description:
            "We put your user at the centre of our design process and make every interaction meaningful.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "User Interface Design",
          description:
            "Where form meets function. Immerse your audience in out-of-this-world experiences tailored to your brand.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Web Development",
          description:
            "Crafted for you. As leading website developers in Cape Town, every line of code we write is purpose-driven, aimed at building websites that not only look spectacular, but perform optimally.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "App Development",
          description:
            "Crafted for you. As leading app developers in Cape Town, every line of code we write is purpose-driven, aimed at building apps that not only look spectacular, but perform optimally.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "SEO",
          description:
            "Stand out from the crowd. Propel your brand to the forefront of search engines with analytics driven strategies.",
        },
      },
    ],
  };
  return (
    <Html lang="en">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaMarkup),
          }}
        />
        <link
          rel="icon"
          href="/favicon-white.svg"
          media="(prefers-color-scheme: dark)"
        />
        <link
          rel="icon"
          href="/favicon-black.svg"
          media="(prefers-color-scheme: light)"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        ></link>
        <link rel="manifest" href="/favicons/site.webmanifest"></link>
        <link
          rel="mask-icon"
          href="/favicons/safari-pinned-tab.svg"
          color="#00cc45"
        ></link>
        <meta name="msapplication-TileColor" content="#00cc45"></meta>

        <meta
          property="og:title"
          content="Konten | Web and App Development Agency"
        />
        <meta
          property="og:description"
          content="Craft bespoke websites and mobile apps with Konten, your Cape Town-based design and development partners. Elevate your brand today."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.konten.dev" />
        <meta
          property="og:image"
          content="https://www.konten.dev/opengraph-image.png"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@kontendev" />
        <meta
          property="twitter:title"
          content="Konten | Web and App Development Agency"
        />
        <meta
          property="twitter:description"
          content="Craft bespoke websites and mobile apps with Konten, your Cape Town-based design and development partners. Elevate your brand today."
        />
        <meta
          name="twitter:image"
          content="https://www.konten.dev/twitter-image.png"
        />
        <meta name="twitter:image:type" content="image/png" />
        <meta name="twitter:image:width" content="300" />
        <meta name="twitter:image:height" content="300" />

        <meta
          name="google-site-verification"
          content="nfIL2QGDCqTW6QJP2ahcHjGzYeY7CD73Ygm8n0Je6vI"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        <Analytics />
      </body>
    </Html>
  );
}
