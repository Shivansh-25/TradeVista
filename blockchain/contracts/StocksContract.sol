// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.0;

contract StocksContract {
    uint256 public nextStockId;

    constructor() {
        nextStockId = 1; // Start stock IDs from 1
    }

    struct Stock {
        uint256 id;
        string symbol;
        string name;
        uint256 price;
        bool isAvailable;
        string eventType; // BUY SELL
        uint256 date;
    }

    mapping(uint256 => Stock) public stocks;

    function createStock(string memory _symbol, string memory _name, string memory _eventType, uint256 _price) public returns (uint256) {
        Stock memory newStock = Stock(nextStockId, _symbol, _name, _price, true, _eventType, block.timestamp);
        stocks[nextStockId] = newStock;
        nextStockId++;
        return nextStockId - 1; // Return the ID of the created stock
    }
}
