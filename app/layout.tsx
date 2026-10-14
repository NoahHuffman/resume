import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./noah-portfolio.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Noah Huffman | Software Engineer",
  description:
    "Noah Huffman is a full-stack software engineer in Chattanooga, TN. Angular, TypeScript, and AWS. Builds a fleet management platform used by 500+ waste companies.",
  metadataBase: new URL("https://huffmansoftware.com"),
  openGraph: {
    title: "Noah Huffman | Software Engineer",
    description:
      "Noah Huffman is a full-stack software engineer in Chattanooga, TN. Angular, TypeScript, and AWS. Builds a fleet management platform used by 500+ waste companies.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Noah Huffman | Software Engineer",
    description:
      "Noah Huffman is a full-stack software engineer in Chattanooga, TN. Angular, TypeScript, and AWS. Builds a fleet management platform used by 500+ waste companies.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
