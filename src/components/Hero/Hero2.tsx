import styles from "./Hero.module.scss";
import Link from "next/link";
import Image from "next/image";

export default function Hero2() {
  return (
    <div>
      <div className="container">
        <div className="flex flex-col gap-12">
          <h1 className={styles.mainTitle}>
            Craft your digital future with{" "}
            <span className="light-green">web development</span> in Cape Town.
          </h1>
          <p className={`${styles.subheading} ${styles.maxWHero}`}>
            We Harmonise Cost-Effectiveness, Quality, and Dedicated Support to
            Craft a Digital Identity That Truly Embodies Your Business&apos;s
            Story.
          </p>

          <Link href="/" className="btn">
            See Our Work
            <Image
              src="./btn-logo.svg"
              alt="konten logo green"
              width={21}
              height={21}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
