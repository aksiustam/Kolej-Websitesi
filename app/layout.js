import { Noto_Sans } from "next/font/google";
const notoSans = Noto_Sans({ subsets: ["latin"] });
import "bootstrap/dist/css/bootstrap.css";
import "@/public/css/index.css";
import "./globals.css";

import { AOSInit } from "./aos";
import Header from "./component/layout/Header";
import Footer from "./component/layout/Footer";
import Script from "next/script";

export const metadata = {
  title: "Konya Boğaziçi Kolej",
  description: "Konya Boğaziçi Koleji ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <Script
        src="https://kit.fontawesome.com/b0fc5c0ae8.js"
        crossOrigin="anonymous"
        async
      />
      <AOSInit />
      <body className={notoSans.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
