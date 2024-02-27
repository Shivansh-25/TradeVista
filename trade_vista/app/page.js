"use client";

import { useEffect, useState } from "react";
import TradingViewWidget from "./Components/TradingViewWidget";

import React from "react";
import TopGainers from "./Components/TopGainers";
import GrayBox from "./Components/GrayBox";
import TopLosers from "./Components/TopLosers";

export default function Home() {
  const [stock, setStock] = useState("");

  useEffect(() => {
    seeStockDetail(stock);
  }, [stock]);

  const seeStockDetail = (symbol) => {
    setStock(symbol);
  };

  return (
    <>
      <div className="w-screen h-screen">
        <div style={{ height: "60vh", width: "70vw" }}>
          <TradingViewWidget />
        </div>
        <GrayBox component={TopGainers} text={"Top Gainers"} />
        <GrayBox component={TopLosers} text={"Top Losers"} />
      </div>
    </>
  );
}
