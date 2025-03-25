import React from "react";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import DownloadCTA from "@/components/DownloadCTA";
import Link from "next/link";
import { describe } from "node:test";
/* eslint-disable */

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <DownloadCTA />
      <div className="p-6 md:px-12 w-full text-center">
        <Link href={"/privacy-policy"} target="_blank">Privacy Policy • </Link>
        <Link href={"/terms-of-use"} target="_blank">Terms of Use</Link>
      </div>
    </>
  );
};

export default Home;


