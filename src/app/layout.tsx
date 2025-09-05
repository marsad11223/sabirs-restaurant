import type { Metadata } from "next";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import ConsentGate from "@/_components/privacy/ConsentGate";
import AnalyticsGA from "@/_components/privacy/AnalyticsGA";
import MetaPixel from "@/_components/privacy/MetaPixel";
import CookieBanner from "@/_components/privacy/CookieBanner";

export const metadata: Metadata = {
  title: "Sabir's",
  description: "Thrill of The Grill",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID || "";
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID || "";

  return (
    <html lang="en">
      <ToastContainer transition={Slide} />
      <body>
        {children}
        <ConsentGate>
          {gaId && <AnalyticsGA gaId={gaId} />}
          {pixelId && <MetaPixel pixelId={pixelId} />}
        </ConsentGate>

        <CookieBanner />
      </body>
    </html>
  );
}
