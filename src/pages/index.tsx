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
        <title>Konten | Web and App Development Agency</title>
        <link rel="canonical" href="https://www.konten.dev" />
        <meta
          name="description"
          content="Craft bespoke websites and mobile apps with Konten, your Cape Town-based design and development partners. Elevate your brand today."
        />
        <link
          rel="preload"
          href="fonts/Franchise-Bold-hinted.woff"
          as="font"
          type="font/woff"
        />
      </Head>
      <div id="home">
        <Hero />
      </div>
      <div id="services">
        <Services />
      </div>
      <div className="dark-bg">
        <div id="ux-design">
          <UX />
        </div>
        <div id="ui-design">
          <UI />
        </div>
        <div id="development">
          <Development />
        </div>
        <div id="seo">
          <SEO />
        </div>
      </div>
      <div id="portfolio">
        <FeaturedWork />
      </div>
      <Testimonials />
      <CTA />
      <div id="home-blog">
        <HomeBlog />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  );
}
