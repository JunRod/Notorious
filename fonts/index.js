import localFont from "next/font/local"
import { Orbitron } from "next/font/google";

export const orbitron = Orbitron({
  weight: "500",
  style: "normal",
  subsets: ["latin"],
  display: "swap"
})

export const PixelPublic = localFont({
  src: "./PublicPixel.ttf",
  display: "swap"
})