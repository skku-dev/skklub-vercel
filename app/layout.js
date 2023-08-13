import Footer from "./components/common/Footer";
import "./globals.css";
import Providers from "./providers";
import Header from "@/app/components/common/Header/Header";
import RecoilRootProvider from "./RecoilRootProvider";

export const metadata = {
  generator: "SKKUD",
  title: "SKKLUB",
  description: "성균관대학교 중앙동아리들을 한번에 볼 수 있는 플랫폼, 스클럽.",
  applicationName: "SKKLUB",
  referrer: "origin-when-cross-origin",
  keywords: ["Next.js", "Spring", "SKKUD", "SKKU", "SKKLUB"],
  authors: [
    { name: "SKKUD", url: "https://skku.dev" },
    { name: "SKKLUB", url: "https://skklub-vercel.vercel.app/" },
  ],
  creator: "SKKUD",
  publisher: "SKKUD",
  openGraph: {
    title: "SKKLUB",
    description:
      "성균관대학교 중앙동아리들을 한번에 볼 수 있는 플랫폼, 스클럽.",
    url: "https://skklub-vercel.vercel.app/",
    siteName: "SKKLUB",
    images: [
      {
        url: "https://nextjs.org/og.png",
        width: 800,
        height: 600,
      },
      {
        url: "https://nextjs.org/og-alt.png",
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <RecoilRootProvider>
      <Providers>
        <html lang="en">
          <body suppressHydrationWarning={true}>
            <Header />

            {children}
            <Footer />
          </body>
        </html>
      </Providers>
    </RecoilRootProvider>
  );
}
