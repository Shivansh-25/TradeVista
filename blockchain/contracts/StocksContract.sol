// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 < 0.9.0;

contract StocksContract {

    struct Stock {
        uint256 id;
        string symbol;
        string name;
        uint256 price;
        bool isAvailable;
        string eventType; // BUY SELL
        uint256 date;
    }
    uint256 public nextStockId;

    mapping(uint256 => Stock) public stocks;


    function createStock(string memory _symbol, string memory _name, string memory _eventType, uint256 _price) public returns (uint256) {
        Stock memory newStock = Stock(nextStockId, _symbol, _name, _price, true, _eventType, block.timestamp);
        stocks[nextStockId] = newStock;
        nextStockId++;
        return nextStockId - 1; 
    }

    

}
