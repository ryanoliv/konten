import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Nav from "@/components/Nav/Nav";
import Footer from "@/components/Footer/Footer";
import { DM_Sans, Darker_Grotesque } from "next/font/google";

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"] });
const darkerGrotesque = Darker_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "800"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`dmSans.className landing-bg`}>
      <header className={"fixed top-0 w-full z-50"}>
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
