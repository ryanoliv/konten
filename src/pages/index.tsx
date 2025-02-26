import Head from "next/head";
import dynamic from "next/dynamic";
import Hero from "@/components/Hero/Hero";
import Services from "@/components/Services/Services";
import FeaturedWork from "@/components/FeaturedWork/FeaturedWork";
import Testimonials from "@/components/Testimonials/Testimonials";
import CTA from "@/components/CTA/CTA";
import Contact from "@/components/Contact/Contact";
import HeroBackgroundImg from "@/components/HeroBackgroundImg/HeroBackgroundImg";
// import ServicesCards from "@/components/ServicesCards/ServicesCards";

const UX = dynamic(() => import("@/components/UX/UX"));
const UI = dynamic(() => import("@/components/UI/UI"));
const Development = dynamic(
  () => import("@/components/Development/Development")
);
const SEO = dynamic(() => import("@/components/SEO/SEO"));
const HomeBlog = dynamic(() => import("@/components/HomeBlog/HomeBlog"));

export default function Home() {
  return (
    <div className="relative">
      <Head>
        <title>Website Developers in Cape Town | Konten</title>
        <link rel="canonical" href="https://www.konten.dev" />
        <meta
          name="description"
          content="Craft custom websites with Konten, your Cape Town-based design and Next.js development partners. Elevate your brand today."
        />
      </Head>
      <HeroBackgroundImg />
      <section id="home">
        <Hero />
      </section>
      <section id="portfolio">
        <FeaturedWork />
      </section>
      <section id="services">
        <Services />
        {/* <ServicesCards /> */}
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
      <Testimonials />
      <CTA />
      <section id="home-blog">
        <HomeBlog />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}
