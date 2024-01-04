import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Nav from "@/components/Nav/Nav";
import Footer from "@/components/Footer/Footer";
import { DM_Sans, Darker_Grotesque } from "next/font/google";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"] });
const darkerGrotesque = Darker_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "800"],
});

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", (e: any) => {
      // console.log(e);
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup function
    return () => {
      // Include any necessary cleanup for Lenis here
    };
  }, []);

  return (
    <div className={`${dmSans.className} landing-bg`}>
      <header className={"fixed top-0 w-full z-20"}>
        <Nav />
      </header>
      <main className="content">
        <Component {...pageProps} />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
