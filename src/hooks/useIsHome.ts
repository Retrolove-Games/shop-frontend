import { useState, useEffect } from "react";


export const useIsHome = () => {
  const [isHome, setIsHome] = useState<boolean>();

  // ⛔ Note! This component must use effect!
  useEffect(() => {
    const location = window ? window.location.pathname : null;

    if (location) {
      location === "/" ? setIsHome(true) : setIsHome(false);
    }
  });

  return isHome;
}
