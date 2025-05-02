import "./css/style.css";
import Script from 'next/script'
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import dotenv from "dotenv";
import Header from "@/components/ui/header";
dotenv.config(); // Load environment variables

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID || 'G-J9FWDRZV2B';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "700"],
});

const nacelle = localFont({
  src: [
    {
      path: "../public/fonts/nacelle-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/nacelle-italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/nacelle-semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/nacelle-semibolditalic.woff2",
      weight: "600",
      style: "italic",
    },
  ],
  variable: "--font-nacelle",
  display: "swap",
});

export const metadata = {
  title: "FlowIQ - AI Agents, Apps, and Automation",
  description: "FlowIQ is an AI agency that automates workflows and enhances productivity through intelligent AI agents and apps for local businesses.",
  
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
         <head>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}');
            `,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${nacelle.variable} bg-gray-950 font-inter text-base text-gray-200 antialiased`}
      >
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          {/* <Header /> */}
          {children}

        </div>
        {/* <div dangerouslySetInnerHTML={{ __html: process.env.HEADER_CODE || "" }} /> */}
      </body>
      

      

    </html>
  );
}
