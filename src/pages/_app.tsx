import { usePageLoading } from "@/hooks/usePageLoading";
import { useLocomotiveScroll } from "@/hooks/useLocomotiveScroll";
import "@/styles/globals.css";
import { dmSans, darkerGrotesque } from "@/utils/fonts";
// import Loader from "@/components/Loader/Loader";
import dynamic from "next/dynamic";
import Nav from "@/components/Nav/Nav";
import type { AppProps } from "next/app";
import HeroBackgroundImg from "@/components/HeroBackgroundImg/HeroBackgroundImg";
import { LocomotiveScrollProvider } from "@/components/LocomotiveScroll/LocomotiveScrollContext";
const Footer = dynamic(() => import("@/components/Footer/Footer"));

export default function App({ Component, pageProps }: AppProps) {
  const pageLoading = usePageLoading();
  useLocomotiveScroll();

  return (
    <LocomotiveScrollProvider>
      <div className={dmSans.variable}>
        {/* <Loader /> */}
        <div
          className={`page-transition ${
            pageLoading
              ? "page-transition-enter"
              : "page-transition-enter-active"
          }`}
        >
          <HeroBackgroundImg />
          <header className="fixed top-0 w-full z-20">
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
