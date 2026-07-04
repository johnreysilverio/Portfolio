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
    "Portfolio of John Rey Silverio — Full Stack Developer specializing in Next.js, React, TypeScript, and modern web applications.",

  keywords: [
    "John Rey Silverio",
    "Portfolio",
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
    canonical: "https://johnreysilverio.com",
  },

  authors: [{ name: "John Rey Silverio" }],
  creator: "John Rey Silverio",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "John Rey Silverio | Full Stack Developer",
    description:
      "Explore projects, skills, and experience of John Rey Silverio.",
    siteName: "John Rey Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "John Rey Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "John Rey Silverio | Full Stack Developer",
    description:
      "Modern Full Stack Developer specializing in Next.js and React.",
    images: ["/og-image.png"],
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
