import { useEffect, useState } from "react";

export const useLocomotiveScroll = () => {
  const [locomotiveScroll, setLocomotiveScroll] = useState<any | null>(null);

  useEffect(() => {
    import("locomotive-scroll").then((LocomotiveScrollModule) => {
      const element = document.querySelector(
        "[data-scroll-container]"
      ) as HTMLElement;

      if (element) {
        const scroll = new LocomotiveScrollModule.default({
          el: element,
          smooth: true,
        });

        setLocomotiveScroll(scroll);

        return () => {
          scroll.destroy();
        };
      }
    });
  }, []);

  return locomotiveScroll;
};
