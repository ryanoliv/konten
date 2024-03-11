import styles from "./Services.module.scss";
import Image from "next/image";
// import Link from "next/link";
// import { useLocomotiveScroll } from "../LocomotiveScroll/LocomotiveScrollContext";

const services = [
  {
    service: "User Experience Design",
    href: "#ux-design",
  },
  {
    service: "User Interface Design",
    href: "#ui-design",
  },
  {
    service: "Web Development",
    href: "#development",
  },
  {
    service: "App Development",
    href: "#development",
  },
  {
    service: "SEO",
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
            // <Link
            //   key={service.service}
            //   href={service.href}
            //   passHref
            //   legacyBehavior
            // >
            //   <a
            //     onClick={(e) => handleLinkClick(e, service.href)}
            //     className="flex py-4 justify-between items-center w-full"
            //   >
            //     <h3 className={styles.service}>{service.service}</h3>
            //     <Image
            //       src="./work/star.svg"
            //       alt="star icon"
            //       width={28}
            //       height={28}
            //     />
            //   </a>
            // </Link>

            <div
              key={service.service}
              className="flex py-2 md:py-4 justify-between items-center w-full"
            >
              <h3 className={styles.service}>{service.service}</h3>
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
