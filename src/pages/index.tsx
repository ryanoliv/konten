import Head from "next/head";
import dynamic from "next/dynamic";
import Hero from "@/components/Hero/Hero";
import Services from "@/components/Services/Services";
// import UX from "@/components/UX/UX";
// import UI from "@/components/UI/UI";
// import Development from "@/components/Development/Development";
// import SEO from "@/components/SEO/SEO";
import FeaturedWork from "@/components/FeaturedWork/FeaturedWork";
import Testimonials from "@/components/Testimonials/Testimonials";
import CTA from "@/components/CTA/CTA";
// import HomeBlog from "@/components/HomeBlog/HomeBlog";
import Contact from "@/components/Contact/Contact";

const UX = dynamic(() => import("@/components/UX/UX"));
const UI = dynamic(() => import("@/components/UI/UI"));
const Development = dynamic(
  () => import("@/components/Development/Development")
);
const SEO = dynamic(() => import("@/components/SEO/SEO"));
const HomeBlog = dynamic(() => import("@/components/HomeBlog/HomeBlog"));

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
        <meta property="og:url" content="https://www.konten.dev" />
        <meta
          property="og:title"
          content="Konten | Web and App Development Agency"
        />
        <meta
          property="og:description"
          content="Craft bespoke websites and mobile apps with Konten, your Cape Town-based design and development partners. Elevate your brand today."
        />
        <meta
          property="twitter:title"
          content="Konten | Web and App Development Agency"
        />
        <meta
          property="twitter:description"
          content="Craft bespoke websites and mobile apps with Konten, your Cape Town-based design and development partners. Elevate your brand today."
        />
      </Head>
      <section id="home">
        <Hero />
      </section>
      <section id="services">
        <Services />
      </section>
      <div className="dark-bg">
        <section id="ux-design">
          <UX />
        </section>
        <section id="ui-design">
          <UI />
        </section>
        <section id="development">
          <Development />
        </section>
        <section id="seo">
          <SEO />
        </section>
      </div>
      <section id="portfolio">
        <FeaturedWork />
      </section>
      <Testimonials />
      <CTA />
      <section id="home-blog">
        <HomeBlog />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
}
