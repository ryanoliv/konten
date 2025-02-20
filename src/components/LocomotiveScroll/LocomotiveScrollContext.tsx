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

  // const handleLinkClick = useCallback(
  //   (e: React.MouseEvent<HTMLAnchorElement>, target: string | number) => {
  //     e.preventDefault();

  //     if (target === 0) {
  //       if (router.pathname !== "/") {
  //         router.push("/");
  //       } else {
  //         window.scrollTo({ top: 0, behavior: "smooth" });
  //       }
  //     } else {
  //       if (router.pathname !== "/") {
  //         router.push(`/${target}`);
  //       } else {
  //         scrollTo(target);
  //       }
  //     }
  //   },
  //   [router, scrollTo]
  // );

  const handleLinkClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, target: string | number) => {
      e.preventDefault();

      const isRootPage = router.pathname === "/";
      const isWebDevPage = router.pathname === "/web-development-cape-town";
      const isHashLink = typeof target === "string" && target.startsWith("#");

      if (isHashLink) {
        const element = document.querySelector(target);

        if (element) {
          // If on the same page, scroll smoothly
          locomotiveScroll?.scrollTo(element);
        } else if (!isRootPage) {
          // If navigating to the root page, push first, then scroll
          router.push(`/${target}`).then(() => {
            setTimeout(() => {
              const newElement = document.querySelector(target);
              if (newElement) {
                locomotiveScroll?.scrollTo(newElement);
              }
            }, 500); // Delay to ensure Locomotive Scroll initializes
          });
        }
      } else {
        // Handle scrolling to top or navigating home
        if (target === 0) {
          if (isRootPage) {
            window.scrollTo({ top: 0, behavior: "smooth" });
          } else {
            router.push("/");
          }
        } else {
          router.push(`/${target}`);
        }
      }
    },
    [router, locomotiveScroll]
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
