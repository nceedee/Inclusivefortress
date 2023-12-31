import React, { useState, useEffect } from "react";
import { Header } from "@/components/Layout/Header/Header";
import "@/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import type { AppProps } from "next/app";
import { Footer } from "@/components/Layout/Footer/Footer";
import { BackToTopArrow } from "@/components/Global/BackToTop";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <div className="max-w-[2000px] m-auto">
            <Component {...pageProps} />
          </div>
        </main>
        <Footer />
        <BackToTopArrow />
      </div>
    </NextUIProvider>
  );
}
