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

      // Initialize the sphere on-screen
      gsap.set(".sphere", {
        xPercent: -50,
        yPercent: -50,
        left: "55%",
        top: "30%",
      });

      const heroContainer = document.querySelector(
        ".heroContainer"
      ) as HTMLElement | null;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".heroContainer",
          start: "top top",
          end: () => `+=${heroContainer?.offsetHeight ?? 1500}`,
          scrub: true,
          //   markers: true,
        },
      });

      //   This moves the sphere to the right by 300 pixels
      //   and then lets it scroll up with the rest of the content
      tl.to(".sphere", { x: 300 })
        .to(".sphere", { y: 380 })
        .to(".sphere", { y: 0 });
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
