import Head from "next/head";
import WebDevHero from "@/components/WebDevHero/WebDevHero";
import WorkWithUs from "@/components/WorkWithUs/WorkWithUs";
import ClientTrust from "@/components/ClientTrust/ClientTrust";
import WebDevServices from "@/components/WebDevServices/WebDevServices";
import OurProcess from "@/components/OurProcess/OurProcess";
import FAQ from "@/components/FAQ/FAQ";
import CTA from "@/components/CTA/CTA";
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
          content="Craft custom websites with Konten, your Cape Town-based design and Next.js development partners. Elevate your brand today."
        />
      </Head>
      <div className="bg-white text-darkestGreen">
        <WebDevHero />
        <WorkWithUs />
        <ClientTrust />
        <WebDevServices />
        <OurProcess />
        <FAQ />
        <CTA2 />
      </div>
    </>
  );
}
