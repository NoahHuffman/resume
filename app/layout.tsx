import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import SiteHeader from "./components/site-header/site-header";
import SiteFooter from "./components/site-footer/site-footer";
import SkipLink from "./components/skip-link/skip-link";
import "./globals.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteDescription =
  "Noah Huffman is a full-stack software engineer in Chattanooga, TN. Angular, TypeScript, and AWS. Builds a fleet management platform used by 500+ waste companies.";

export const metadata: Metadata = {
  title: "Noah Huffman | Software Engineer",
  description: siteDescription,
  metadataBase: new URL("https://huffmansoftware.com"),
  openGraph: {
    title: "Noah Huffman | Software Engineer",
    description: siteDescription,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Noah Huffman | Software Engineer",
    description: siteDescription,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>
        <SkipLink />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
