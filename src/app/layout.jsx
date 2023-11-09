"use client";

import { useEffect, useState } from "react";
import "./globals.scss";
import Preloader from "./components/Preloader/Loader";
import { AnimatePresence } from "framer-motion";

export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3250);
  });
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
