// import { useEffect } from "react";
import styles from "./Hero.module.scss";

export default function Hero1() {
  return (
    <>
      <div className={styles.heroContainer}>
        <div className="container-hero flex flex-col justify-center items-center min-h-screen relative">
          <span className={styles.mainHeading}>Konten</span>
          <span className={styles.subheading}>
            Where <span className="light-green">Visionary</span> Tech Meets{" "}
            <br /> Tailor-Made Digital Experiences.
          </span>
        </div>
      </div>
    </>
  );
}
