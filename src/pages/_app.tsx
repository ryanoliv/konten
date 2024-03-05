import { useRouter } from "next/router";
import "@/styles/globals.css";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader/Loader";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import HeroBackgroundImg from "@/components/HeroBackgroundImg/HeroBackgroundImg";
import { LocomotiveScrollProvider } from "@/components/LocomotiveScroll/LocomotiveScrollContext";
import { DM_Sans, Darker_Grotesque } from "next/font/google";
import Nav from "@/components/Nav/Nav";
// import Footer from "@/components/Footer/Footer";

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"] });

const Footer = dynamic(() => import("@/components/Footer/Footer"));

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [pageLoading, setPageLoading] = useState(false);

  const [locomotiveScroll, setLocomotiveScroll] = useState<any | null>(null);

  // Detecting route changes
  useEffect(() => {
    const handleStart = () => setPageLoading(true);
    const handleComplete = () => setPageLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete); // consider adding this to handle load errors

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  useEffect(() => {
    import("locomotive-scroll").then((LocomotiveScrollModule) => {
      const element = document.querySelector(
        "[data-scroll-container]"
      ) as HTMLElement;

      if (element) {
        const scroll = new LocomotiveScrollModule.default({
          el: element,
          smooth: true,
        });

        setLocomotiveScroll(scroll);

        return () => {
          scroll.destroy();
        };
      }
    });
  }, []);

  return (
    <LocomotiveScrollProvider>
      <div className={dmSans.className}>
        <Loader />
        <div
          className={`page-transition ${
            pageLoading
              ? "page-transition-enter"
              : "page-transition-enter-active"
          }`}
        >
          <HeroBackgroundImg />
          <header className={"fixed top-0 w-full z-20"}>
            <Nav />
          </header>
          <main className="content" data-scroll-container>
            <Component {...pageProps} />
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
      </div>
    </LocomotiveScrollProvider>
  );
}
