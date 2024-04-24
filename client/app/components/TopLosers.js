import React from "react";
import { useFetchStocks } from "../Hooks/useFetchStocks";
import StockInfo from "./StockInfo";

const TopLosers = () => {
  const { data, loading } = useFetchStocks(
    "https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=G8GUQ1KETZSEZCOQ"
  );

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {data.top_losers.map((stock) => (
        <StockInfo
          key={stock.ticker}
          symbol={stock.ticker}
          price={stock.price}
          changePercentage={stock.change_percentage}
          isGainer={false}
        />
      ))}
    </div>
  );
};

export default TopLosers;
