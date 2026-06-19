import { useEffect, useState } from "react";

export function useNavbarScroll() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const homeEnd = document.getElementById("home-end");

    if (!homeEnd) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsScrolled(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0,
        rootMargin: "0px 0px -120px 0px",
      }
    );

    observer.observe(homeEnd);

    return () => observer.disconnect();
  }, []);

  return isScrolled;
}
