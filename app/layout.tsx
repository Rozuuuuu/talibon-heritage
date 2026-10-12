import type { Metadata } from "next";
import { Anybody, Inter, EB_Garamond } from "next/font/google";
import { MotionProvider } from "@/components/providers/MotionProvider";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { CustomCursor } from "@/components/ui/CustomCursor";
import "./globals.css";

const anybody = Anybody({
  subsets: ["latin"],
  variable: "--font-anybody",
  weight: ["700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "600"],
  display: "swap",
});

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-eb-garamond",
  style: ["normal", "italic"],
  weight: ["400"],
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://talibon-heritage.org";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Talibon Heritage Foundation — The Cathedral",
    template: "%s · Talibon Heritage",
  },
  description:
    "Custodians of coral-stone monolithic architecture, historical archives, and the living heritage of northern Bohol.",
  openGraph: {
    title: "Talibon Heritage Foundation — The Cathedral",
    description:
      "Custodians of coral-stone monolithic architecture, historical archives, and the living heritage of northern Bohol.",
    url: siteUrl,
    siteName: "Talibon Heritage Foundation",
    locale: "en_PH",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${anybody.variable} ${inter.variable} ${ebGaramond.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        />
      </head>
      <body className="bg-paper text-ink font-body antialiased selection:bg-ink selection:text-paper">
        <MotionProvider>
          <SmoothScroll>
            <CustomCursor />
            {children}
          </SmoothScroll>
        </MotionProvider>
      </body>
    </html>
  );
}