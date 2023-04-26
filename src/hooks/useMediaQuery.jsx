import { useEffect } from "react";
import { useState } from "react";

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    if (mediaQueryList.matches !== matches) {
      setMatches(mediaQueryList.matches);
    }
    const listener = () => setMatches(mediaQueryList.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);

  return matches;
};

export default useMediaQuery;
