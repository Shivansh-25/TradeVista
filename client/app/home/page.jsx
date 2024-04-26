"use client";

import TradingViewWidget from "../Components/TradingViewWidget";

import React from "react";
import TopGainers from "../Components/TopGainers";
import GrayBox from "../Components/GrayBox";
import TopLosers from "../Components/TopLosers";
import { useSelector } from "react-redux";
import Trial from "../Components/trial";
import SearchBar from "../Components/SearchBar";
import NavBar from "../Components/NavBar";
import Blackbox from "../Components/BlackBox";
import BuyInfo from "../Components/BuyInfo";

export default function First() {
//  const count = useSelector((state) => state.counter.value);
  return (
    <>
      <div className="w-screen min-h-screen bg-[#1b1b1b] p-5">
        <NavBar />
        <div className="bg-gray p-3 rounded-lg m-3 mb-6">
          <Blackbox />

        </div>
        <div className="p-3 flex justify-between h-[70vh]">
          <div className="w-[80vw] h-[70vh]">
            <TradingViewWidget />
          </div>
          <div>
            <GrayBox component={TopGainers} text={"Top Gainers"} />
            <div className="mt-4">
              <GrayBox component={TopLosers} text={"Top Losers"} />
            </div>
          </div>
        </div>
        {/* <div className="flex justify-center mt-10 p-3">
        {/* <div className="flex justify-center mt-10 p-3">
          <div className="rounded-full bg-black text-white border border-white p-3 mr-[40vw]">
            Virtual Balance
          </div>
          <div className="rounded-full bg-black text-white border border-white p-3">
            Real Balance
          </div>
        </div> */}
        <div className="p-3">
          <BuyInfo />
        </div>
      </div>
    </>
  );
}
