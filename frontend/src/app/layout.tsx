import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { getSettingData } from "@/queries/settings";

// Helvetica Now Text (local font)
const helveticaNowText = localFont({
  src: [
    {
      path: "../../public/font/HelveticaNowDisplay-Thin.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/font/HelveticaNowDisplay-ThinIta.ttf",
      weight: "200",
      style: "italic",
    },
    {
      path: "../../public/font/HelveticaNowDisplay-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/font/HelveticaNowDisplay-LightIta.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../public/font/HelveticaNowDisplay-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/font/HelveticaNowDisplay-RegIta.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/font/HelveticaNowDisplay-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/font/HelveticaNowDisplay-MedIta.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../public/font/HelveticaNowDisplay-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/font/HelveticaNowDisplay-BoldIta.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../public/font/HelveticaNowDisplay-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/font/HelveticaNowDisplay-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../public/font/HelveticaNowDisplay-BlackIta.ttf",
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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const data = await getSettingData();
  return (
    <html lang="da">
      <body className={`${helveticaNowText.variable} font-sans antialiased`}>
        <Header data={data.header} />
        {children}
        <Footer data={data.footer} />
      </body>
    </html>
  );
}
