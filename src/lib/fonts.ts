import { Geist, Geist_Mono, Bricolage_Grotesque, Inter_Tight } from "next/font/google";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
  });
  
  const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
  });

 export const bricolage = Bricolage_Grotesque({
    variable: "--font-bricolage",
    subsets: ["latin"],
  });

  export const inter = Inter_Tight({
    variable: "--font-inter",
    subsets: ["latin"],
  });