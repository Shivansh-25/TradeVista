import React from "react";

const StockInfo = ({ symbol, price, changePercentage, isGainer }) => {
  const changeColor = isGainer ? "text-green-500" : "text-red-500";
  return (
    <div className="rounded-lg block text-xs mt-2">
      <div>Symbol: {symbol}</div>
      <div>Price: {price}</div>
      <div className={changeColor}>Change: {changePercentage}%</div>
    </div>
  );
};

export default StockInfo;
