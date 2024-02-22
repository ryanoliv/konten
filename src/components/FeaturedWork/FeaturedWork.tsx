import styles from "./FeaturedWork.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function FeaturedWork() {
  return (
    <div className="container flex flex-col gap-16">
      <div className="flex justify-between gap-6 w-full items-end">
        <h2 className={styles.featuredWorkTitle}>Featured Work</h2>
        <p className={styles.featuredWorkText}>
          A collection of our most recent transformations.
        </p>
      </div>
      <div className="flex justify-between gap-4 w-full">
        <Link href="https://alkemi.global" target="_blank">
          <div className={styles.featuredWorkProject}>
            <div className={styles.featuredWorkImgBox}>
              <Image
                src="./work/alkemi-box.svg"
                alt="gray rectangle box"
                width={635}
                height={390}
                className={styles.featuredWorkImg}
              />
              <Image
                src="./work/alkemi-logo.svg"
                alt="alkemi collective logo"
                width={403}
                height={143.53}
                className={styles.featuredWorkLogo}
              />
            </div>

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
            <div className={styles.featuredWorkImgBox}>
              <Image
                src="./work/hbmedia-box.svg"
                alt="blurred gradient box"
                width={635}
                height={390}
                className={styles.featuredWorkImg}
              />
              <Image
                src="./work/hbmedia-logo.svg"
                alt="hb media logo"
                width={403.97}
                height={132.31}
                className={styles.featuredWorkLogo}
              />
            </div>
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
