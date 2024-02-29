import styles from "./CTA.module.scss";
import Link from "next/link";
import Image from "next/image";
import { useLocomotiveScroll } from "../LocomotiveScroll/LocomotiveScrollContext";

export default function CTA() {
  const { handleLinkClick } = useLocomotiveScroll();
  return (
    <section className="container">
      <div className={styles.marqueeContainer}>
        <h2 className={styles.marqueeText}>
          Ready to Transform Your Digital Presence?&nbsp;
        </h2>
        <h2 className={styles.marqueeText}>
          Ready to Transform Your Digital Presence?&nbsp;
        </h2>
      </div>
      <div className="flex flex-col gap-12 items-center">
        <p className="cta-subtitle">
          Let&apos;s Build Something Remarkable Together.
        </p>
        <Link href="/#contact" passHref legacyBehavior>
          <a onClick={(e) => handleLinkClick(e, "#contact")} className="btn">
            Get in Touch
            <Image
              src="./btn-logo.svg"
              alt="konten logo green"
              width={21}
              height={21}
            />
          </a>
        </Link>
      </div>
    </section>
  );
}
