import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // Basic metadata
  title: {
    template: "%s | LinkSpace",
    default: "LinkSpace",
  },
  description: "Your Digital World, Beautifully Organized",


  // Canonical URL and base URL for metadata
  metadataBase: new URL("https://spaces.tracepanic.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
    },
  },

  // Open Graph metadata for social sharing
  openGraph: {
    title: "LinkSpace",
    description: "Your Digital World, Beautifully Organized",
    url: "https://spaces.tracepanic.com",
    siteName: "LinkSpace",
    images: [
      {
        url: "",
        width: 1200,
        height: 630,
        alt: "LinkSpace",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter card metadata
  twitter: {
    card: "summary_large_image",
    title: "LinkSpace",
    description: "Your Digital World, Beautifully Organized",
    creator: "@tracepanic",
    images: [],
  },

  // Robots directives
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  // Icons
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
      },
    ],
  },

  // Manifest
  manifest: "https://spaces.tracepanic.com/manifest.json",

  // Additional metadata
  keywords: [
    "web development",
    "next.js",
    "react",
    "professional websites",
    "web design",
  ],
  generator: "Next.js",
  authors: [{ name: "Patrick Obama", url: "https://tracepanic.com/profile" }],
  creator: "Patrick Obama",
  publisher: "Patrick Obama",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  // App information
  applicationName: "LinkSpace",
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
