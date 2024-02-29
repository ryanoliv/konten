import { useEffect } from "react";
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

      // Media query for mobile devices
      const isMobile = window.innerWidth < 768;

      // Initialize the sphere on-screen
      gsap.set(".sphere", {
        xPercent: -50,
        yPercent: -50,
        scale: 1,
        left: "55%",
        top: isMobile ? "600px" : "900px",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".sphere",
          start: "-55% top",
          end: "+=2200",
          scrub: 0.5,
          // markers: true,
        },
      });

      tl.to(".sphere", {
        x: "20vw",
        y: "10vh",
        scale: 1.7,
        duration: 1.2,
        ease: "power1.inOut",
      })

        .to(".sphere", {
          y: "80vh",
          duration: 2,
          ease: "power1.inOut",
        })
        .to(".sphere", {
          scale: 0.5, // Scale down to a smaller sphere
          duration: 2,
          ease: "power1.inOut",
        });

      return () => {
        // Cleanup animations
        tl.kill(); // Assuming 'tl' is your GSAP timeline
        ScrollTrigger.getAll().forEach((instance) => instance.kill());
      };
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
