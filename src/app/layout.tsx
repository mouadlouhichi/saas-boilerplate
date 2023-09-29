import { ReactNode } from "react";
import { Metadata } from "next";

import "@/fonts/line-awesome-1.3.0/css/line-awesome.css";
import "nprogress/nprogress.css";
import "@/styles/index.scss";
import "rc-slider/assets/index.css";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Relivator Next.js Starter",
  description:
    "Next.js 13 ultimate starter with TypeScript, ESLint, Prettier, Absolute Imports, and more.",
};

type Props = {
  children: ReactNode;
};

// Since we have a `not-found.tsx` page on the root, a layout file
// is required, even if it's just passing children through.
export default function RootLayout({ children }: Props) {
  return children;
}
