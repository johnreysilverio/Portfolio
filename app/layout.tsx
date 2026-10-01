import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://johnreysilverio.com"),

  title: {
    default: "John Rey Silverio | Full Stack Developer",
    template: "%s | John Rey Silverio",
  },

  description:
    "John Rey Silverio is a full-stack developer in the Philippines building responsive web applications with Next.js, React, TypeScript, and Node.js.",

  keywords: [
    "John Rey Silverio",
    "John Rey Silverio portfolio",
    "Full Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "Philippines Developer",
  ],

  alternates: {
    canonical: "/",
  },

  authors: [{ name: "John Rey Silverio", url: "https://johnreysilverio.com" }],
  creator: "John Rey Silverio",
  publisher: "John Rey Silverio",
  category: "technology",
  applicationName: "John Rey Silverio Portfolio",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    title: "John Rey Silverio | Full Stack Developer",
    description:
      "Explore the projects, technical skills, and professional experience of full-stack developer John Rey Silverio.",
    siteName: "John Rey Silverio Portfolio",
    url: "/",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "John Rey Silverio | Full Stack Developer",
    description:
      "Full-stack developer in the Philippines building modern applications with Next.js, React, TypeScript, and Node.js.",
  },

  icons: {
    icon: "/svg/JR Logo.svg",
    shortcut: "/svg/JR Logo.svg",
    apple: "/svg/JR Logo.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased p-0 m-0`}
      >
        <ThemeProvider attribute="class" enableSystem defaultTheme="system">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
