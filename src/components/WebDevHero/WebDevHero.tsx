import Link from "next/link";
import Image from "next/image";
import { webDevHeroImg } from "@/utils/imageImports";
import { useLocomotiveScroll } from "../LocomotiveScroll/LocomotiveScrollContext";

export default function WebDevHero() {
  const { handleLinkClick } = useLocomotiveScroll();
  return (
    <section className="px-4 text-white relative min-h-screen flex items-center justify-center border-y border-zinc-600">
      <Image
        src={webDevHeroImg}
        alt="lions head and table mountain from a drone image"
        fill
        className="object-cover object-[60%_100%] md:object-bottom"
        priority
        placeholder="blur"
        quality={80}
        sizes="100vw"
      />
      <div className="bg-gradient-to-b from-red-600 via-lime-700 to-blue-700 absolute inset-0 opacity-50 z-10 mix-blend-multiply"></div>
      <div className="relative flex flex-col gap-12 items-center z-10">
        <div className="flex flex-col gap-4 items-center max-w-[605px]">
          <h1 className="text-4xl font-semibold md:text-6xl text-center">
            Custom <span className="italic font-normal">Web Development</span> &{" "}
            <span className="italic font-normal">Design</span> in Cape Town
          </h1>
          <p className="text-sm text-center tracking-wide">
            We&apos;re dedicated to helping businesses create websites and web
            apps that don&apos;t just look good but work intelligently too.
            Whether you need a simple landing page or a feature-packed
            e-commerce platform, we&apos;ve got you.
          </p>
        </div>
        <Link href="/#webdevservices" passHref legacyBehavior>
          <a
            onClick={(e) => handleLinkClick(e, "#webdevservices")}
            className="py-4 px-6 border rounded-full font-medium uppercase text-xs bg-white text-darkestGreen shadow-md hover:bg-transparent hover:text-white transition-colors"
          >
            See our services
          </a>
        </Link>
      </div>
    </section>
  );
}
