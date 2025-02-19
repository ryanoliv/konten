import Image from "next/image";
import Link from "next/link";
import { workWithUsImg } from "@/utils/imageImports";
import { useLocomotiveScroll } from "../LocomotiveScroll/LocomotiveScrollContext";
import SectionContainer from "../SectionContainer/SectionContainer";

export default function WorkWithUs() {
  const { handleLinkClick } = useLocomotiveScroll();
  return (
    <section className="text-white bg-darkestGreen">
      <SectionContainer>
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <Image
            src={workWithUsImg}
            alt="konten mobile mockup"
            placeholder="blur"
            width={600}
            height={600}
            className="rounded-lg shadow-[1px_1px_32px_rgba(255,255,255,0.15)]"
          />
          <div className="flex flex-col items-center md:items-start gap-8">
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl text-center">
                <span className="italic font-light">Work</span> With Us
              </h2>
              <p className="text-lg max-w-[550px] font-light">
                We&apos;re not here to churn out cookie-cutter websites.
                We&apos;re about creating solutions that fit your business.
                Based in Cape Town, our team is small enough to give you
                personal attention and big enough to handle any project you
                throw our way.
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
        </div>
      </SectionContainer>
    </section>
  );
}
