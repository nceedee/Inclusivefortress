import React, { useState, useEffect } from "react";
import { Header } from "@/components/Layout/Header/Header";
import "@/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import type { AppProps } from "next/app";
import { Footer } from "@/components/Layout/Footer/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <Component {...pageProps} />
          </div>
        </main>
        <Footer />
      </div>
    </NextUIProvider>
  );
}
