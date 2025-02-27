import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import { getSchemaMarkup } from "@/utils/schemaMarkup";

export default function Document() {
  const schemaMarkup = getSchemaMarkup();

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

        <link
          rel="preload"
          href="/fonts/Franchise-Bold-hinted.woff"
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.konten.dev" />
        <meta
          property="og:title"
          content="Website Developers in Cape Town | Konten"
        />
        <meta
          property="og:description"
          content="Craft bespoke websites with Konten, your Cape Town-based design and development partners. Elevate your brand today."
        />
        <meta
          property="og:image"
          content="https://www.konten.dev/opengraph-image.png"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="200" />
        <meta property="og:image:height" content="200" />

        <meta
          property="twitter:title"
          content="Website Developers in Cape Town | Konten"
        />
        <meta
          property="twitter:description"
          content="Craft bespoke websites and mobile apps with Konten, your Cape Town-based design and development partners. Elevate your brand today."
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@kontendev" />

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

        <link
          rel="sitemap"
          type="application/xml"
          title="Sitemap"
          href="/sitemap.xml"
        />

        {/* Google tag (gtag.js)  */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`}
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING_ID}');
  `}
        </Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
