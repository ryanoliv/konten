import styles from "./Hero.module.scss";

export default function Hero3() {
  return (
    <>
      <div className="container">
        <div className="flex flex-col gap-12">
          <h2 className="page-title">What we do</h2>
          <h3 className={styles.secondaryTitle}>
            We bring your <span className="light-green">brand</span> to life
            through <span className="light-green">tailor-made</span>{" "}
            experiences.
          </h3>
          <p className={`${styles.subheading} ${styles.maxWHero3}`}>
            Whether it&apos;s a <span className="light-green">web</span> or{" "}
            <span className="light-green">mobile</span> application, our
            dedication lies in delivering an unparalleled user experience
            tailored to your distinct needs.
          </p>
        </div>
      </div>
    </>
  );
}
