"use client";

import { useState, useEffect } from "react";
import useURLParse from "../../../../hooks/useURLParse";
import HomePageLogo from "./HomePageLogo";
import HeaderBar from "./HeaderBar";

export default function Header() {
  const { location, isSuwon, type } = useURLParse();
  
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  });

  return (
    <>
      {location === "" ? null : location!=="notices" && type === undefined && scrollPosition < 60 ? (
        <HomePageLogo location={location} />
      ) : (
        <HeaderBar location={location ==="notices"?"seoul":location} type={type} isSuwon={isSuwon} />
      )}
    </>
  );
}
