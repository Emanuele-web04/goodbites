import type { Metadata } from "next";
import { inter, bricolage } from '../lib/fonts'
import "./globals.css";


export const metadata: Metadata = {
  title: {
    template: "%s - GoodBites | Recipe Manager",
    default: "GoodBites | Recipe Manager" 
  },
  description: "The best way to save recipes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${bricolage.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
