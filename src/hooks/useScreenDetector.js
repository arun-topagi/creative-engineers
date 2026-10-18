import { useEffect, useState } from "react";

export const useScreenDetector = () => {
  const [width, setWidth] = useState(1280);

  useEffect(() => {
    const handleWindowSizeChange = () => {
      setWidth(window.innerWidth);
    };

    handleWindowSizeChange();
    window.addEventListener("resize", handleWindowSizeChange);

    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width < 768;
  const isTablet = width <= 1024 && width >= 768;
  const isDesktop = width > 1024;

  return { isMobile, isTablet, isDesktop };
};