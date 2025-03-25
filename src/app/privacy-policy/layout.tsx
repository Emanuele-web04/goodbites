import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description: "The best way to save recipes",
  };

const layout = ({ children }: Readonly<{children: React.ReactNode}>) => {
  return <>{children}</>;
};

export default layout;
