import { useEffect } from "react";
import styles from "./Hero.module.scss";
import gsap from "gsap";
import Hero1 from "./Hero1";
import Hero2 from "./Hero2";
import Hero3 from "./Hero3";
import Sphere from "../Sphere/Sphere";

export default function Hero() {
  useEffect(() => {
    // Dynamically import ScrollTrigger
    import("gsap/ScrollTrigger").then(({ default: ScrollTrigger }) => {
      gsap.registerPlugin(ScrollTrigger);

      // Initialize the sphere on-screen
      gsap.set(".sphere", {
        xPercent: -50,
        yPercent: -50,
        left: "55%",
        top: "30%",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".sphere",
          start: "-46% top",
          end: "+=150%",
          scrub: true,
          markers: true,
        },
      });

      tl.to(".sphere", { x: "15vw", duration: 0.5, ease: "none" })
        .add(() => {
          ScrollTrigger.create({
            trigger: "sphere",
            start: "center center",
            end: "+=100%",
            // pin: true,
            // pinSpacing: false,
          });
        })
        .to(
          ".sphere",
          {
            y: "75vh",
            duration: 2,
            ease: "none",
            immediateRender: false,
          },
          "<"
        );
    });
  }, []);
  return (
    <>
      <Hero1 />
      <Hero2 />
      <Hero3 />
      <div className="sphere">
        <Sphere />
      </div>
    </>
  );
}
