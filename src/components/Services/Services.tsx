import styles from "./Services.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useLocomotiveScroll } from "../LocomotiveScroll/LocomotiveScrollContext";

export default function Services() {
  const { handleLinkClick } = useLocomotiveScroll();
  return (
    <div className="container">
      <div className="flex flex-col gap-10">
        <h2 className="page-title">Our Services</h2>
        <div
          className={`flex flex-col p-6 ${styles.servicesContainer} relative`}
        >
          <Link href="/#ux-design" passHref legacyBehavior>
            <a
              onClick={(e) => handleLinkClick(e, "#ux-design")}
              className="flex py-4 justify-between items-center w-full"
            >
              <h3 className={styles.service}>User Experience Design</h3>
              <Image
                src="./arrow.svg"
                alt="diagonal arrow"
                width={26}
                height={28}
              />
            </a>
          </Link>
          <Link href="/#ui-design" passHref legacyBehavior>
            <a
              onClick={(e) => handleLinkClick(e, "#ui-design")}
              className="flex py-4 justify-between items-center w-full"
            >
              <h3 className={styles.service}>User Interface Design</h3>
              <Image
                src="./arrow.svg"
                alt="diagonal arrow"
                width={26}
                height={28}
              />
            </a>
          </Link>
          <Link href="/#development" passHref legacyBehavior>
            <a
              onClick={(e) => handleLinkClick(e, "#development")}
              className="flex py-4 justify-between items-center w-full"
            >
              <h3 className={styles.service}>Web Development</h3>
              <Image
                src="./arrow.svg"
                alt="diagonal arrow"
                width={26}
                height={28}
              />
            </a>
          </Link>
          <Link href="/#development" passHref legacyBehavior>
            <a
              onClick={(e) => handleLinkClick(e, "#development")}
              className="flex py-4 justify-between items-center w-full"
            >
              <h3 className={styles.service}>App Development</h3>
              <Image
                src="./arrow.svg"
                alt="diagonal arrow"
                width={26}
                height={28}
              />
            </a>
          </Link>
          <Link href="/#seo" passHref legacyBehavior>
            <a
              onClick={(e) => handleLinkClick(e, "#seo")}
              className="flex py-4 justify-between items-center w-full"
            >
              <h3 className={styles.service}>SEO</h3>
              <Image
                src="./arrow.svg"
                alt="diagonal arrow"
                width={26}
                height={28}
              />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
