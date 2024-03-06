// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.0;

import "./StocksContract.sol";

contract UsersContract {
    uint256 public nextUserId;

    constructor() {
        nextUserId = 1; // Start user IDs from 1
    }

    struct User {
        uint256 id;
        string name;
        string email;
        uint256[] ownedStocks;
    }

    mapping(uint256 => User) public mapIdToUser;

    function createUser(string memory _name, string memory _email) public returns (uint256) {
        User memory newUser = User(nextUserId, _name, _email, new uint256[](0));
        mapIdToUser[nextUserId] = newUser;
        nextUserId++;
        return nextUserId - 1; // Return the ID of the created user
    }

    function updateUser(uint256 _id, string memory _name, string memory _email) public returns (bool) {
        require(_id < nextUserId, "User does not exist");
        User storage u = mapIdToUser[_id];
        u.name = _name;
        u.email = _email;
        return true;
    }

    function deleteUser(uint256 _id) public returns (bool) {
        require(_id < nextUserId, "User does not exist");
        delete mapIdToUser[_id];
        return true;
    }

    function getUser(uint256 _id) external view returns (uint256, string memory, string memory, uint256[] memory) {
        require(_id < nextUserId, "User does not exist");
        return (mapIdToUser[_id].id, mapIdToUser[_id].name, mapIdToUser[_id].email, mapIdToUser[_id].ownedStocks);
    }

    function addStockToUser(uint256 _userId, uint256 _stockId) public returns (bool) {
        require(_userId < nextUserId, "User does not exist");

        User storage u = mapIdToUser[_userId];
        u.ownedStocks.push(_stockId);
        return true;
    }
}
