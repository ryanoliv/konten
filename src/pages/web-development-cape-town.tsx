import Head from "next/head";
import WebDevHero from "@/components/WebDevHero/WebDevHero";
import WorkWithUs from "@/components/WorkWithUs/WorkWithUs";
import ClientTrust from "@/components/ClientTrust/ClientTrust";
import WebDevServices from "@/components/WebDevServices/WebDevServices";
import OurProcess from "@/components/OurProcess/OurProcess";
import FAQ from "@/components/FAQ/FAQ";
import CTA2 from "@/components/CTA2/CTA2";

export default function Page() {
  return (
    <>
      <Head>
        <title>Web Development Cape Town | Konten</title>
        <link
          rel="canonical"
          href="https://www.konten.dev/web-development-cape-town"
        />
        <meta
          name="description"
          content="Need a web developer in Cape Town? We build custom websites and web apps that look great, load fast, and help your business grow. No templates—just smart, SEO-friendly solutions tailored to you."
        />
      </Head>
      <div className="bg-white text-darkestGreen">
        <WebDevHero />
        <WorkWithUs />
        <ClientTrust />
        <div id="webdevservices">
          <WebDevServices />
        </div>
        <OurProcess />
        <FAQ />
        <CTA2 />
      </div>
    </>
  );
}
