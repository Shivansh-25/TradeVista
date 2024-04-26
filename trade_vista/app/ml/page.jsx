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
      <div>This is the ML page</div>
      <input
        type="text"
        className="text-black"
        value={companySymbol}
        onChange={handleSymbolChange}
        placeholder="Enter Company Symbol"
      />
      <button onClick={getPlotImage}>Click to show plot</button>
      {closingValue && (
        <img src={URL.createObjectURL(closingValue)} alt="Stock Price Plot" />
      )}
      <button onClick={getPredictedStock}>Click to show prediction</button>
      {predictionImage && (
        <img
          src={URL.createObjectURL(predictionImage)}
          alt="Stock Price Plot"
        />
      )}
    </>
  );
}

export default page;
