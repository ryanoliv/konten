import { useEffect } from "react";
import styles from "./Hero.module.scss";
import gsap from "gsap";

export default function Hero1() {
  const radius = 175; // The radius of the circle in your SVG
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    // Create GSAP timeline
    const tl = gsap.timeline();

    gsap.set(".loading-logo", { opacity: 0 });

    // Fade in overlay
    tl.to(".overlay", {
      autoAlpha: 1,
      duration: 0.25,
      ease: "power2.inOut",
    })
      .to(".loading-circle circle", {
        strokeDashoffset: 0,
        duration: 2,
        ease: "linear",
      })
      .to(
        ".loading-logo",
        {
          opacity: 1,
          duration: 0.5,
          ease: "power2.inOut",
        },
        "-=1.5"
      );

    // Animate th overlay up and out of the viewport
    tl.to(".overlay", {
      y: "-100%",
      duration: 1.2,
      ease: "power2.inOut",
    }).to(
      ".loading-circle, loading-logo",
      {
        // y: "-100%",
        opacity: 0,
        autoAlpha: 0,
        duration: 0.45,
        ease: "power2.inOut",
      },
      "-=1"
    );
  }, []);

  return (
    <>
      <div className={styles.heroContainer}>
        <div className="overlay"></div>
        <svg
          className="loading-circle"
          width="400" // Ensure the SVG canvas is large enough to contain the circle
          height="400"
          viewBox="0 0 400 400" // Update the viewBox to match the new size
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="200" // Center of the SVG canvas
            cy="200" // Center of the SVG canvas
            r={radius} // Radius of the circle
            fill="none"
            stroke="#fff"
            strokeWidth="2"
            strokeDasharray={circumference}
            strokeDashoffset={circumference}
            strokeLinecap="round"
          />
          <svg
            className="loading-logo"
            width="45"
            height="45"
            x={(400 - 45) / 2} // Calculate to center the logo
            y={(400 - 45) / 2} // Calculate to center the logo
            viewBox="0 0 55 55"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M46.7834 16.6378C42.1728 21.0227 35.7566 22.796 29.6144 23.6827C24.1333 24.4887 18.4103 24.8273 13.5095 26.9553C8.38295 29.1961 5.15873 32.904 5.41666 38.6431C5.57787 42.093 7.4318 45.4623 10.0434 48.0578C10.7689 48.6381 11.5104 49.1863 12.2843 49.686C12.2359 49.5893 12.1875 49.4764 12.1069 49.3797C8.99555 45.1076 6.57739 32.8717 22.8597 30.2117C26.1323 29.6797 29.4049 29.1316 32.6613 28.39C35.5309 27.7291 40.6574 26.117 41.2216 25.8107C41.6891 25.5366 38.1747 29.4863 27.4058 32.5815C10.3014 37.4985 15.5568 51.7012 20.7801 53.3294C22.7791 53.813 24.8748 54.0548 27.0189 54.0548C41.9471 54.0548 54.054 41.964 54.054 27.0359C54.054 21.6675 52.4903 16.67 49.7981 12.4785C49.0726 14.0584 48.057 15.4126 46.7834 16.6378Z"
              fill="#fff"
            />
            <path
              d="M0 27.0351C0 30.0014 0.483633 32.8226 1.35417 35.4987C1.67659 32.5646 2.6761 29.7918 4.54615 27.4381C7.93158 23.1338 13.1871 21.1186 18.6521 20.0385C24.101 18.9745 29.9046 18.8456 35.4987 17.4914C38.5939 16.7498 41.7375 15.5407 44.2363 13.5578C46.3159 11.8813 47.2832 9.33412 45.123 6.96432C44.333 6.25499 43.4947 5.5779 42.6242 4.9653C44.2041 8.20564 42.9789 13.0258 30.1626 14.2833C26.8739 14.6218 23.6013 14.9281 20.3609 15.3795C19.4098 15.5085 18.233 15.6858 17.0239 15.8954C17.0239 15.8954 18.0879 14.5735 25.6003 12.8646C41.0443 9.38248 38.1586 2.65998 33.5803 0.806055C31.4845 0.29018 29.2759 0 27.019 0C12.0908 0.0161211 0 12.1069 0 27.0351Z"
              fill="#fff"
            />
          </svg>
        </svg>
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
