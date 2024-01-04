import { useEffect } from "react";
import styles from "./Hero.module.scss";
import gsap from "gsap";
import Image from "next/image";

// gsap.registerPlugin(ScrollTrigger);

export default function Hero1() {
  useEffect(() => {
    // Create a GSAP timeline
    const tl = gsap.timeline();

    // Fade in the overlay layers
    tl.to(".overlay-top, .overlay-mid-top, .overlay-mid-bot, .overlay-bottom", {
      autoAlpha: 1,
      duration: 0.5,
      ease: "power2.inOut",
      stagger: 0.1, // Stagger the fade in of each overlay
    })
      // Rotate and fade in the logo
      .to(
        ".gsap-logo",
        {
          autoAlpha: 1,
          duration: 3,
          ease: "power2.inOut",
          rotation: 360,
          // transformOrigin: "50% 50%",
        },
        "-=0.25"
      ) // Overlap the end of the previous animation slightly
      // Slide down each overlay to reveal the hero content with a stagger effect
      .to(".overlay-top", {
        y: "100%", // Move the overlay down by 100% of its height
        duration: 2.5,
        ease: "power2.inOut",
      })
      .to(
        ".overlay-mid-top",
        {
          y: "100%",
          duration: 2.5,
          ease: "power2.inOut",
        },
        "-=2.3"
      ) // slight overlap
      .to(
        ".overlay-mid-bot",
        {
          y: "100%",
          duration: 2.5,
          ease: "power2.inOut",
        },
        "-=2.1"
      ) // slight overlap
      .to(
        ".overlay-bottom",
        {
          y: "100%",
          duration: 2.5,
          ease: "power2.inOut",
        },
        "-=1.9"
      ) // slight overlap
      .to(
        ".gsap-logo",
        {
          autoAlpha: 0,
          duration: 1,
          delay: 0.5,
          ease: "power2.inOut",
        },
        "-=2.5"
      ) // This ensures it happens simultaneously with the overlay sliding down
      // Fade in heading, subheading, and sphere after the last overlay slides out
      .from(
        ".heading, .subheading, .sphere",
        {
          autoAlpha: 1,
          duration: 0.5,
          stagger: 0.2,
          ease: "power2.inOut",
        },
        "-=2"
      ); // Start fading in the content just before the last overlay finishes sliding down
  }, []);

  return (
    <>
      <div className={styles.heroContainer}>
        <div className="overlay overlay-top"></div>
        <div className="overlay overlay-mid-top"></div>
        <div className="overlay overlay-mid-bot"></div>
        <div className="overlay overlay-bottom"></div>
        <div className="container flex flex-col justify-center items-center min-h-screen relative">
          <div className="gsap-logo">
            <Image
              src="./logo-black.svg"
              alt="konten logo"
              width={55}
              height={55}
            />
          </div>

          <span className="heading">Konten</span>
          <span className={styles.subheading}>
            Where <span className="light-green">Visionary</span> Tech Meets{" "}
            <br /> Tailor-Made Digital Experiences.
          </span>
        </div>
      </div>
    </>
  );
}
