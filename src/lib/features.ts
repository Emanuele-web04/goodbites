// features.ts
import { IconType } from "react-icons";
import { FaInstagram, FaGlobe, FaWifi } from "react-icons/fa6";
import { MdOutlineSaveAlt } from "react-icons/md";
import { BiLinkExternal } from "react-icons/bi";
import { BsRobot } from "react-icons/bs";

export interface Feature {
  title: string;
  description: string;
  isFree: boolean;
  icon: IconType;
}

export const features: Feature[] = [
  {
    title: "Save Recipes",
    description: "Save all the recipes you want, 10 for free, unlimited for premium.",
    isFree: true,
    icon: MdOutlineSaveAlt, // Save symbol
  },
  {
    title: "Share Recipe on Insta",
    description: "Share recipes on Instagram and let everybody know what you're cooking!",
    isFree: true,
    icon: FaInstagram, // Instagram logo
  },
  {
    title: "Save Recipe Links",
    description: "Share recipe links into the app, so you can find them easily!",
    isFree: false,
    icon: BiLinkExternal, // Link symbol
  },
  {
    title: "Natural Language Summary (Experimental)",
    description: "Utilizes advanced Natural Language from Apple to extract key content.",
    isFree: false,
    icon: BsRobot, // Symbolizes AI / NLP
  },
  {
    title: "Offline Mode",
    description: "Reach and read your recipes even without internet.",
    isFree: true,
    icon: FaWifi, // WiFi with slash could also be used
  },
  {
    title: "Integrated Browser",
    description: "Integrated browser so if you need to look something up, you don't have to leave the app!",
    isFree: true,
    icon: FaGlobe, // Browser / world icon
  },
];
