import React, { useState, useEffect } from "react";
import { Header } from "@/components/Layout/Header/Header";
import "@/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <Header />
      <div className="max-w-[1400px] m-auto">
        <Component {...pageProps} />
      </div>
    </NextUIProvider>
  );
}
