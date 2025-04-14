import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/layout/header";

// Helvetica Now Text (local font)
const helveticaNowText = localFont({
  src: [
    {
      path: "../../public/font/helveticanowtext-bold-demo.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/font/helveticanowtext-bolditalic-demo.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../public/font/helveticanowtext-black-demo.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../public/font/helveticanowtext-blackitalic-demo.ttf",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-helvetica-now",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Billigmaskinleje",
  description: "Din pålidelige partner for maskinleje i Danmark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="da">
      <body className={`${helveticaNowText.variable} font-sans antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
