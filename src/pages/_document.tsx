import { Html, Head, Main, NextScript } from "next/document";
import { Analytics } from "@vercel/analytics/react";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
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
        <meta
          name="twitter:image"
          content="https://www.konten.dev/twitter-image.png"
        />
        <meta name="twitter:image:type" content="image/png" />
        <meta name="twitter:image:width" content="300" />
        <meta name="twitter:image:height" content="300" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <Analytics />
      </body>
    </Html>
  );
}
