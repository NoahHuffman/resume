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
    "Noah Huffman is a Chattanooga-based software engineer building thoughtful Angular applications, dependable AWS services, and useful mobile tools.",
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
