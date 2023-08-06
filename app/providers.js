"use client";

import { ThemeProvider } from "@emotion/react";
import { CssBaseline, createTheme } from "@mui/material";
import getDesignTokens from "@/utils/getDesignTokens";
import { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { isDarkModeState } from "@/utils/atoms";

const Providers = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useRecoilState(isDarkModeState);
  const darkModeTheme = createTheme(getDesignTokens("dark"));
  const lightModeTheme = createTheme(getDesignTokens("light"));
  const [client] = useState(
    new QueryClient({ defaultOptions: { queries: { staleTime: 5000 } } })
  );

  useEffect(() => {
    const mode = window.localStorage.getItem("skklubMode");
    console.log(mode);
    if (mode === "light") {
      setIsDarkMode(false);
    }
  }, []);
  return (
    <ThemeProvider theme={isDarkMode ? darkModeTheme : lightModeTheme}>
      <CssBaseline />

      <QueryClientProvider client={client}>{children}</QueryClientProvider>
    </ThemeProvider>
  );
};

export default Providers;
