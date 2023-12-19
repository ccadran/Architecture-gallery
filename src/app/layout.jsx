"use client";

import { useEffect, useState } from "react";
import "./globals.scss";
import Preloader from "./components/Preloader/Loader";
import { AnimatePresence } from "framer-motion";
// import LocomotiveScroll from "locomotive-scroll";

export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Always hide overflow-x
    document.body.style.overflowX = "hidden";

    // Disable scrolling for the entire body only when the page is loading
    document.body.style.overflowY = isLoading ? "hidden" : "auto";
    setTimeout(() => {
      setIsLoading(false);
    }, 3250);
  }, [isLoading]);

  // const locomotiveScroll = new LocomotiveScroll();

  return (
    <html lang="en">
      <body>
        <AnimatePresence mode="wait">
          {isLoading && <Preloader />}
        </AnimatePresence>
        {children}
      </body>
    </html>
  );
}
