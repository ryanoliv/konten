import styles from "./Services.module.scss";
import Image from "next/image";
// import Link from "next/link";
// import { useLocomotiveScroll } from "../LocomotiveScroll/LocomotiveScrollContext";

const services = [
  {
    service: "User Experience Design",
    serviceBio:
      "Improve customer satisfaction with intuitive and user-friendly website experiences.",
    href: "#ux-design",
  },
  {
    service: "User Interface Design",
    serviceBio:
      "Modern, high-quality UI design that enhances your brand’s digital presence.",
    href: "#ui-design",
  },
  {
    service: "Web Development",
    serviceBio:
      "Fast, responsive, and SEO-optimised websites tailored to your business needs.",
    href: "#development",
  },
  // {
  //   service: "App Development",
  //   href: "#development",
  // },
  {
    service: "SEO",
    serviceBio:
      "Improve your Google ranking and attract more clients with on-page and technical SEO.",
    href: "#seo",
  },
];

export default function Services() {
  // const { handleLinkClick } = useLocomotiveScroll();
  return (
    <div className="container">
      <div className="flex flex-col gap-10">
        <h2 className="page-title">Our Services</h2>
        <div
          className={`flex flex-col p-6 ${styles.servicesContainer} relative`}
        >
          {services.map((service) => (
            <div
              key={service.service}
              className="flex py-2 md:py-4 justify-between items-center w-full"
            >
              <div className="flex flex-col">
                <h3 className={styles.service}>{service.service}</h3>
                <p className="uppercase tracking-[2px] text-sm opacity-60">
                  {service.serviceBio}
                </p>
              </div>
              <Image
                src="./work/star.svg"
                alt="star icon"
                width={28}
                height={28}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
