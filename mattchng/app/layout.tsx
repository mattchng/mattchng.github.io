import type { Metadata } from "next";
import { Lora } from "next/font/google";
import Providers from "./providers";
import "./globals.css";

const lora = Lora({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Matthew Cheng",
  description: "matthew's personal website",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.ico", sizes: "16x16", type: "image/x-icon" },
      { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
    ],
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.ico" sizes="16x16" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" sizes="32x32" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body
        className={`${lora.className} bg-gray-50 dark:bg-slate-950 relative
        min-h-screen pl-0 pr-0 pt-12 pb-2 mx-10 
        flex justify-center sm:mx-24 transition-colors duration-200`}>
        <Providers>
          <div className="bg-[#fff3f3] dark:bg-[#2a1f1f] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem rounded-full blur-[10rem] sm:w-[68.75rem] "></div>
          <div className="bg-[#f8f7ff] dark:bg-[#1f2a3a] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>

          {children}
        </Providers>
      </body>
    </html>
  );
}
