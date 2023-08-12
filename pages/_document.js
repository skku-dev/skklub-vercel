import Document, { Html, Head, Main, NextScript } from "next/document";
import React from "react";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta name="theme-color" content="#000000" />
          <meta
            name="description"
            content="성균관대학교 중앙동아리들을 한번에 볼 수 있는 플랫폼, 스클럽."
          />
          <meta property="og:url" content="https://skklub-vercel.vercel.app/" />
          <meta property="og:title" content="SKKLUB" />
          <meta property="og:type" content="website" />
          <meta
            property="og:description"
            content="성균관대학교 중앙동아리들을 한번에 볼 수 있는 플랫폼, 스클럽."
          />
          <title>SKKLUB</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
