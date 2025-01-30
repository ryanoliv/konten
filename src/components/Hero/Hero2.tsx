import styles from "./Hero.module.scss";
import Link from "next/link";
import Image from "next/image";
import { useLocomotiveScroll } from "../LocomotiveScroll/LocomotiveScrollContext";

export default function Hero2() {
  const { handleLinkClick } = useLocomotiveScroll();
  return (
    <div>
      <div className="container">
        <div className="flex flex-col gap-12">
          <h1 className={styles.mainTitle}>
            Craft your digital future with{" "}
            <span className="light-green">web development</span> based in Cape
            Town.
          </h1>
          <p className={`${styles.subheading} ${styles.maxWHero}`}>
            Whether you&apos;re a startup or an established business, we create
            high-performing websites that captivate your audience and drive
            results.
          </p>

          <Link href="/#contact" passHref legacyBehavior>
            <a onClick={(e) => handleLinkClick(e, "#contact")} className="btn">
              Get a Custom Website
              <Image
                src="./btn-logo.svg"
                alt="konten logo green"
                width={21}
                height={21}
                loading="lazy"
              />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
