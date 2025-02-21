import Link from "next/link";
import Image from "next/image";
import { ctaSectionImg } from "@/utils/imageImports";
import { useLocomotiveScroll } from "../LocomotiveScroll/LocomotiveScrollContext";
import SectionContainer from "../SectionContainer/SectionContainer";

export default function CTA2() {
  const { handleLinkClick } = useLocomotiveScroll();
  return (
    <section className="relative py-20 text-white">
      <Image
        src={ctaSectionImg}
        alt="signal hill with table mountain in the background"
        placeholder="blur"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black w-full h-full opacity-50 z-[5]"></div>
      <SectionContainer>
        <div className="relative flex flex-col items-center gap-8 z-10">
          <div className="flex flex-col gap-2 items-center max-w-[550px]">
            <h2 className="text-3xl md:text-5xl text-center font-medium">
              Let&apos;s Build Something Amazing
            </h2>
            <p className="text-center">
              Stop searching for a “web developer near me” and start working
              with a team that&apos;s got your back. Let&apos;s build something
              amazing together.
            </p>
          </div>
          <Link href="/#contact" passHref legacyBehavior>
            <a
              onClick={(e) => handleLinkClick(e, "#contact")}
              className="py-4 px-6 border rounded-full font-medium uppercase text-xs bg-white text-darkestGreen shadow-md hover:bg-transparent hover:text-white transition-colors"
            >
              Get in touch
            </a>
          </Link>
        </div>
      </SectionContainer>
    </section>
  );
}
