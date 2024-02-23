import React, { createContext, useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";

export const LenisContext = createContext<Lenis | undefined>(undefined);

type LenisProviderProps = {
  children: React.ReactNode;
};

export default function LenisProvider({ children }: LenisProviderProps) {
  // Initialize lenis state with undefined and then set it inside useEffect
  const [lenis, setLenis] = useState<Lenis>();

  useEffect(() => {
    const newLenis = new Lenis();
    setLenis(newLenis);

    newLenis.on("scroll", (e: any) => {
      console.log(e);
    });

    function raf(time: number) {
      newLenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup function to prevent memory leaks
    return () => newLenis.destroy();
  }, []);

  return (
    <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>
  );
}
