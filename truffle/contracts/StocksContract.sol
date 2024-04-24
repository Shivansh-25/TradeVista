// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.5.16;

contract StocksContract {
    uint256 public nextStockId;

    constructor() public {
        nextStockId = 0;
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

    mapping(uint256 => Stock) public stocks; // Mapping from stock ID to stock details
    mapping(uint256 => uint256[]) public stockOwners; // Mapping from stock ID to array of owner user IDs

    function createStock(
        string memory _symbol,
        string memory _name,
        string memory _eventType,
        uint256 _price
    ) public returns (uint256) {
        Stock memory newStock = Stock(
            nextStockId,
            _symbol,
            _name,
            _price,
            true,
            _eventType,
            block.timestamp
        );
        stocks[nextStockId] = newStock;
        nextStockId++;
        return nextStockId - 1;
    }

    function updateStockOwners(
        uint256 _stockId,
        uint256[] memory _ownerIds
    ) public returns (bool) {
        stockOwners[_stockId] = _ownerIds;
        return true;
    }

    function getStock(
        uint256 _stockId
    )
        external
        view
        returns (
            uint256,
            string memory,
            string memory,
            uint256,
            bool,
            string memory,
            uint256
        )
    {
        Stock memory s = stocks[_stockId];
        return (
            s.id,
            s.symbol,
            s.name,
            s.price,
            s.isAvailable,
            s.eventType,
            s.date
        );
    }
}
