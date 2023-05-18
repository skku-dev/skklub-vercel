import "../styles/globals.css";
import { ThemeProvider } from "@emotion/react";
import { CacheProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme } from "@mui/material/styles";
import createEmotionCache from "../utils/createEmotionCache";
import getDesignTokens from "../utils/getDesignTokens";
import Header from "../components/common/Header";

const clientSideEmotionCache = createEmotionCache();

const darkModeTheme = createTheme(getDesignTokens("dark"));

function MyApp({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}) {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={darkModeTheme}>
        <CssBaseline />
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;
