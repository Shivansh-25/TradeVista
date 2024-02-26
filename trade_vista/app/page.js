"use client";

import TradingViewWidget from "./Components/TradingViewWidget";
import React from "react";

export default function Home() {
  return (
    <>
      <div className="w-screen h-screen">
        <div style={{height: "60vh", width: "60vw"}}>
          <TradingViewWidget />
        </div>
      </div>
    </>
  );
}
