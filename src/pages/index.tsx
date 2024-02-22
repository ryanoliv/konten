import Head from "next/head";
import Hero from "@/components/Hero/Hero";
import Services from "@/components/Services/Services";
import UX from "@/components/UX/UX";
import UI from "@/components/UI/UI";
import Development from "@/components/Development/Development";
import SEO from "@/components/SEO/SEO";
import FeaturedWork from "@/components/FeaturedWork/FeaturedWork";
import Testimonials from "@/components/Testimonials/Testimonials";
import CTA from "@/components/CTA/CTA";
import HomeBlog from "@/components/HomeBlog/HomeBlog";
import Contact from "@/components/Contact/Contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>Konten | Web Development Agency</title>
        <link rel="canonical" href="https://www.konten.dev" />
        <meta
          name="description"
          content="Craft bespoke websites and mobile apps with Konten, your Cape Town-based design and SEO partners. Elevate your brand today."
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
      </Head>
      <Hero />
      <Services />
      <div className="dark-bg">
        <UX />
        <UI />
        <Development />
        <SEO />
      </div>
      <FeaturedWork />
      <Testimonials />
      <CTA />
      <HomeBlog />
      <Contact />
    </>
  );
}
