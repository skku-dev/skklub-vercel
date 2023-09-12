const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          //라이트 율전
          primary: {
            main: "#80A4FF",
          },
          //라이트 명휸
          secondary: {
            main: "#86DDC8",
          },
          background: {
            paper: "#E5E4DA",
            default: "#FFFEF4",
          },
          text: {
            primary: "#242422",
            secondary: "#585858",
          },
          //라이트 카라우셀
          info: {
            main: "#FFF",
          },
        }
      : {
          //다크 율전
          primary: {
            main: "#80A4FF",
          },
          //다크 명륜
          secondary: {
            main: "#16A480",
          },
          background: {
            paper: "#434C4F",
            default: "#151717",
          },
          text: {
            primary: "#fff",
            secondary: "#DFE3E4",
          },
          //다크 카라우셀
          info: {
            main: "#464E52",
          },
        }),
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
            @font-face {
              font-family: 'GmarketSansMedium';
              font-style: normal;
              font-display: swap;
              font-weight: 400;
              unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
            }
          `,
    },
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: "#00ff0000",
        },
      },
    },
  },
});

export default getDesignTokens;
