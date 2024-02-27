"use client";

import { useEffect, useState } from "react";
import TradingViewWidget from "../Components/TradingViewWidget";

import React from "react";
import TopGainers from "../Components/TopGainers";
import GrayBox from "../Components/GrayBox";
import TopLosers from "../Components/TopLosers";
import { useSelector } from "react-redux";
import Trial from "../Components/trial";

export default function First() {
  const count = useSelector((state) => state.counter.value);
  return (
    <>
      <div className="w-screen h-screen">
        <h1>{count}</h1>
        <div style={{ height: "60vh", width: "70vw" }}>
          <TradingViewWidget />
        </div>
        <GrayBox component={TopGainers} text={"Top Gainers"} />
        <GrayBox component={TopLosers} text={"Top Losers"} />
        <Trial />
      </div>
    </>
  );
}
