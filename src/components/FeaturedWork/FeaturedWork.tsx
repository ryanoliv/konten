import styles from "./FeaturedWork.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function FeaturedWork() {
  return (
    <div className="container flex flex-col gap-16">
      <div className="flex justify-between w-full items-end">
        <h2 className={styles.featuredWorkTitle}>Featured Work</h2>
        <p className={styles.featuredWorkText}>
          A collection of our most recent transformations.
        </p>
      </div>
      <div className="flex justify-between w-full">
        <Link href="https://alkemi.global" target="_blank">
          <div className={styles.featuredWorkProject}>
            <Image
              src="./work/alkemi.svg"
              alt="alkemi collective logo"
              width={635}
              height={390}
              className={styles.featuredWorkImg}
            />
            <h3 className="flex gap-2">
              Web Development{" "}
              <Image
                src="./work/star.svg"
                alt="star icon"
                width={11.5}
                height={11.5}
              />
              SEO
            </h3>
            <h4>Alkemi Collective</h4>
          </div>
        </Link>
        <Link href="https://hbmedia.io" target="_blank">
          <div className={styles.featuredWorkProject}>
            <Image
              src="./work/hbmedia.svg"
              alt="hb media logo"
              width={635}
              height={390}
              className={styles.featuredWorkImg}
            />
            <h3 className="flex gap-2">
              UX
              <Image
                src="./work/star.svg"
                alt="star icon"
                width={11.5}
                height={11.5}
              />
              UI
              <Image
                src="./work/star.svg"
                alt="star icon"
                width={11.5}
                height={11.5}
              />
              Web Development
              <Image
                src="./work/star.svg"
                alt="star icon"
                width={11.5}
                height={11.5}
              />
              SEO
            </h3>
            <h4>HB Media</h4>
          </div>
        </Link>
      </div>
    </div>
  );
}
