import type { Metadata, Viewport } from "next";
import { Nunito } from "next/font/google";

import { IOSInstallPrompt } from "@/components/IOSInstallPrompt";
import { SerwistProvider } from "@/lib/serwist-provider";
import { appBranding } from "@/lib/site";

import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

const APP_NAME = appBranding.name;
const APP_DEFAULT_TITLE = appBranding.name;
const APP_TITLE_TEMPLATE = `%s · ${appBranding.shortName}`;
const APP_DESCRIPTION = appBranding.description;

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  icons: {
    icon: [
      {
        url: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    apple: "/icon-192x192.png",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  /*
   * PWA extras live above (manifest, icons, appleWebApp, icons).
   * When swapping real assets, update `public/manifest.json` and
   * `metadata.icons` / `appleWebApp` together.
   */
};

export const viewport: Viewport = {
  themeColor: "#57534e",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nunito.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">
        <SerwistProvider swUrl="/serwist/sw.js">{children}</SerwistProvider>
        <IOSInstallPrompt />
      </body>
    </html>
  );
}
