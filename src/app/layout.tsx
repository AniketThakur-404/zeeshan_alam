import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Cormorant_Garamond, JetBrains_Mono } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import LabelCursor from "@/components/reveal-kit/LabelCursor";
import "./globals.css";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Zeeshan Alam — SEO Executive, WordPress & Shopify Developer",
  description:
    "Portfolio of Zeeshan Alam — SEO Executive, WordPress Developer, and Shopify Developer helping brands build fast storefronts and scale organic search traffic.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${jakartaSans.variable} ${cormorantGaramond.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-[#f2542d]/15 selection:text-[#f2542d]">
        <TooltipProvider>
          <SmoothScrollProvider>
            <LabelCursor />
            {children}
          </SmoothScrollProvider>
        </TooltipProvider>
      </body>
    </html>
  );
}
