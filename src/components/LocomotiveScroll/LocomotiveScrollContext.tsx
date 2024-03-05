import React, {
  createContext,
  useCallback,
  useContext,
  useState,
  useEffect,
} from "react";
import { useRouter } from "next/router";

type LocomotiveScrollOptions = {
  offset?: number;
  lerp?: number;
  duration?: number;
};

type LocomotiveScrollContextType = {
  locomotiveScroll: any | null;
  scrollTo: (
    target: string | number,
    options?: LocomotiveScrollOptions
  ) => void;
  handleLinkClick: (
    e: React.MouseEvent<HTMLAnchorElement>,
    target: string | number
  ) => void;
};

const LocomotiveScrollContext = createContext<
  LocomotiveScrollContextType | undefined
>(undefined);

interface LocomotiveScrollProviderProps {
  children: React.ReactNode;
}

export const useLocomotiveScroll = () => {
  const context = useContext(LocomotiveScrollContext);
  if (!context) {
    throw new Error(
      "useLocomotiveScroll must be used within a LocomotiveScrollProvider"
    );
  }
  return context;
};

export const LocomotiveScrollProvider: React.FC<
  LocomotiveScrollProviderProps
> = ({ children }) => {
  const [locomotiveScroll, setLocomotiveScroll] = useState<any | null>(null);
  const router = useRouter();

  useEffect(() => {
    import("locomotive-scroll").then((LocomotiveScrollModule) => {
      const element = document.querySelector(
        "[data-scroll-container]"
      ) as HTMLElement;
      if (element) {
        const scroll = new LocomotiveScrollModule.default({
          el: element,
          smooth: true,
          lerp: 0.2,
        });
        setLocomotiveScroll(scroll);
        return () => {
          scroll.destroy(); // Clean up LocomotiveScroll instance on component unmount
        };
      }
    });
  }, []);

  const scrollTo = useCallback(
    (target: string | number, options?: LocomotiveScrollOptions) => {
      if (locomotiveScroll) {
        locomotiveScroll.scrollTo(target, options);
      }
    },
    [locomotiveScroll]
  );

  const handleLinkClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, target: string | number) => {
      e.preventDefault();

      if (target === 0) {
        if (router.pathname !== "/") {
          router.push("/");
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      } else {
        if (router.pathname !== "/") {
          router.push(`/${target}`);
        } else {
          scrollTo(target);
        }
      }
    },
    [router, scrollTo]
  );

  return (
    <LocomotiveScrollContext.Provider
      value={{ locomotiveScroll, scrollTo, handleLinkClick }}
    >
      {children}
    </LocomotiveScrollContext.Provider>
  );
};

export default LocomotiveScrollContext;
