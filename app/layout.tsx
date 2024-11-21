import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import Header from "@/components/Layout/Header";
import "./globals.css";

import { Kranky } from "next/font/google";

const kranky = Kranky({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "JHONATHAN | PORTFOLIO",
  description:
    "Welcome! This is my portfolio, where I share my projects, skills, and a bit about myself as a front-end developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${kranky.className}`}>
        <ThemeProvider attribute="class">
          <div className="mx-auto max-w-[90%] 2xl:max-w-[1280px]">
            <Header />
            <div className="absolute left-0 mx-auto h-[1px] w-screen bg-line-light dark:bg-line-dark" />
            <div className="min-h-screen border-x border-line-light dark:border-line-dark">
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
