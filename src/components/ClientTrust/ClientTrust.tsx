import tailored from "../../../public/svgs/tailored.svg";
// import tailored from "../../../public/pngs/scissor.png";
import expertise from "../../../public/svgs/expertise.svg";
import seo from "../../../public/svgs/seo.svg";
import fullSupport from "../../../public/svgs/full-support.svg";
import SectionContainer from "../SectionContainer/SectionContainer";
import Image from "next/image";

const trustValues = [
  {
    title: "Tailored Solutions",
    description:
      "Every website we build is unique, designed to meet your specific goals and stand out from the crowd.",
    icon: tailored,
  },
  {
    title: "Expertise Across Platforms",
    description:
      "From website builders to advanced web app development, we know how to make tech work for you.",
    icon: expertise,
  },
  {
    title: "SEO Done Right",
    description:
      "We'll make sure your site is optimised to rank well on Google and attract the right visitors.",
    icon: seo,
  },
  {
    title: "Full Support",
    description:
      "From the first idea to the final launch—and beyond—we're here to help.",
    icon: fullSupport,
  },
];

export default function ClientTrust() {
  return (
    <section className="text-darkestGreen">
      <SectionContainer>
        <h2 className="text-3xl text-center">
          Why Our Clients <span className="italic">Trust</span> Us
        </h2>
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="flex flex-col">
            {trustValues.map((value, index) => (
              <div
                key={index}
                className={`bg-white relative flex gap-4 p-4 border rounded-lg max-w-[430px] ${
                  index === 0
                    ? "rotate-2 shadow-lg z-10 translate-y-1"
                    : "shadow-sm"
                }`}
              >
                <Image
                  src={value.icon}
                  alt={`${value.title} icon`}
                  width={35}
                  height={35}
                />
                <div className="flex flex-col text-sm">
                  <h3 className="font-semibold">{value.title}</h3>
                  <p className="text-darkGreen">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4 max-w-[440px]">
              <div className="flex gap-1">
                {[
                  Array(5)
                    .fill(null)
                    .map((_, i) => (
                      <Image
                        key={i}
                        src="/pngs/star.png"
                        alt="5 star rating"
                        width={20}
                        height={20}
                      />
                    )),
                ]}
              </div>
              <h3 className="text-xl font-medium">
                Trust is built on experience, reliability, and results
              </h3>
              <p>
                Our clients trust us because we focus on more than just
                design—we ensure every site is fast, SEO-friendly, and built for
                long-term success. But trust isn&apos;t just about the end
                result. It&apos;s about the process, the communication, and the
                commitment to getting things right. We listen, adapt, and make
                sure that every project runs smoothly from start to finish.
                Whether you need a simple site or a complex web application, we
                take the time to understand your business, your audience, and
                what success looks like for you.
              </p>
            </div>
            {/* <div className="flex gap-8">
              <Image
                src="/client-logos/firetail.svg"
                alt="firetail fly logo"
                width={100}
                height={33}
              />
              <Image
                src="/client-logos/hbmedia.svg"
                alt="hb media logo"
                width={100}
                height={33}
              />
              <Image
                src="/client-logos/jlearning.svg"
                alt="j-learning logo"
                width={118}
                height={33}
              />
            </div> */}
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
