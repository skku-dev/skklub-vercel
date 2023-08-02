"use client";

import { useState, useEffect } from "react";

const useThemeModeDetect = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    setIsDarkMode(
      window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
    );
  }, []);

  return isDarkMode;
};

export default useThemeModeDetect;
