import type { Metadata, Viewport } from "next";
import { Kanit, Satisfy } from "next/font/google";
import "./globals.css";

const kanit = Kanit({
  variable: "--font-kanit",
  subsets: ["latin"],
  weight: "400",
});

const satisfy = Satisfy({
  variable: "--font-satisfy",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Big Picture Pediatric Dentistry",
  description: "Thoughtful pediatric dentistry in the Houston area.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  applicationName: "Big Picture Pediatric Dentistry",
  keywords: ["pediatric dentist", "children's dentist", "Houston pediatric dentistry", "Clear Lake pediatric dentist"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Big Picture Pediatric Dentistry",
    description: "Thoughtful pediatric dentistry for children and families in the Houston area.",
    siteName: "Big Picture Pediatric Dentistry",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fffdf9",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${kanit.variable} ${satisfy.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>{children}</body>
    </html>
  );
}
