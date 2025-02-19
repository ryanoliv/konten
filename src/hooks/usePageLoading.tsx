import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export const usePageLoading = () => {
  const [isPageLoading, setIsPageLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => setIsPageLoading(true);
    const handleComplete = () => setIsPageLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  return isPageLoading;
};
