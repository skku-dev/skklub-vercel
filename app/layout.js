import Footer from "./components/common/Footer";
import "./globals.css";
import Providers from "./providers";
import Header from "@/app/components/common/Header/Header";
import RecoilRootProvider from "./RecoilRootProvider";

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
