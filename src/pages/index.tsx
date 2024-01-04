import Head from "next/head";
import Hero from "@/components/Hero/Hero";
import Services from "@/components/Services/Services";

export default function Home() {
  return (
    <>
      <Head>
        <title>Konten | Craft Your Digital Future</title>
        <link rel="canonical" href="https://www.konten.dev" />
        <meta
          name="description"
          content="We harmonise cost-effectiveness, quality, and dedicated support to craft a digital identity that truly embodies your business's story."
        />
      </Head>
      <Hero />
      <Services />
    </>
  );
}
