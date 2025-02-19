import { DM_Sans, Darker_Grotesque } from "next/font/google";

export const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const darkerGrotesque = Darker_Grotesque({
  subsets: ["latin"],
  variable: "--font-grotesque",
  display: "swap",
});
