"use client";
import React, { useState } from "react";

function page() {
  const [closingValue, setClosingValue] = useState(null);
  const [companySymbol, setCompanySymbol] = useState("AAPL");
  const [predictionImage, setPredictionImage] = useState(null);

  async function getPlotImage() {
    try {
      const response = await fetch(
        `http://127.0.0.1:5000/plot?company=${companySymbol}`,
      );
      // Assuming your Flask app uses send_file (raw image data)
      const blob = await response.blob();
      setClosingValue(blob);
      setPredictionImage(null);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  async function getPredictedStock() {
    try {
      const response = await fetch(
        `http://127.0.0.1:5000/predict?company=${companySymbol}`,
      );

      const blob = await response.blob();
      setPredictionImage(blob);
      setClosingValue(null);
    } catch (error) {
      console.log("Error:", error);
    }
  }

  const handleSymbolChange = (event) => {
    setCompanySymbol(event.target.value);
    console.log(companySymbol);
  };

  return (
    <>
      <div className="flex flex-col justify-evenly items-center w-[100vw] h-[100vh]">
        {" "}
        <div className="m-2 p-2">
          <h1 className="text-2xl">Predict the rise and fall of stocks</h1>
        </div>
          <div className="flex flex-col ">
            <input
              type="text"
              className="text-black rounded-md p-2 m-2 "
              value={companySymbol}
              onChange={handleSymbolChange}
              placeholder="Enter Company Symbol"
            />
            <button
              className="bg-slate-300 rounded-md p-2 text-black"
              onClick={getPlotImage}
            >
              Show plot
            </button>
            {closingValue && (
              <img
                src={URL.createObjectURL(closingValue)}
                alt="Stock Price Plot"
              />
            )}
          </div>
          <div className="flex flex-col">
            <input
              type="text"
              className="text-black rounded-md p-2 m-2"
              value={companySymbol}
              onChange={handleSymbolChange}
              placeholder="Enter Company Symbol"
            />
            <button
              className="bg-slate-300 rounded-md p-2 text-black"
              onClick={getPredictedStock}
            >
              Click to show prediction
            </button>
            {predictionImage && (
              <img
                src={URL.createObjectURL(predictionImage)}
                alt="Stock Price Plot"
              />
            )}{" "}
          </div>
        </div>
    </>
  );
}

export default page;
