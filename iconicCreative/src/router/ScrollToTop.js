import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     window.scrollTo(0, 0);
  //   }, 600);
  //   return () => clearTimeout(timer);
  // }, [pathname]);

  return null;
};

export default ScrollToTop;
