import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { site } from "@/data/site";
import "./globals.css";

const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });

export const metadata: Metadata = {
  title: site.title, description: site.description,
  openGraph: { title: site.title, description: site.description, type: "website" }
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${space.variable} ${inter.variable} ${jetbrains.variable} font-sans`}>{children}</body></html>;
}
