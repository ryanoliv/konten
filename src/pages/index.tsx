import Sphere from "@/components/Sphere/Sphere";
import Head from "next/head";
// import Image from "next/image";

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
        {/* <meta
          name="google-site-verification"
          content="3wRzltTEuoUyIZ6uD1YDm37oVeHUMecIDA72jAHmFyc"
        /> */}
      </Head>
      <div>
        <div className="container flex flex-col justify-center items-center min-h-screen">
          <span className="heading">Konten</span>
          <span className="subheading">
            Where <span className="light-green">Visionary</span> Tech Meets{" "}
            <br /> Tailor-Made Digital Experiences.
          </span>
          {/* <Image
            src="/globe.png"
            alt="Konten sphere"
            width={705}
            height={710}
            className="sphere"
          /> */}
          <div className="sphere">
            <Sphere />
          </div>
        </div>
      </div>
    </>
  );
}
