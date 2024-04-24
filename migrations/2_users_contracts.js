var UsersContract = artifacts.require("./UsersContract.sol");
var StocksContract = artifacts.require("./StocksContract.sol");

module.exports = function (deployer) {
  deployer.deploy(StocksContract).then(function () {
    return deployer.deploy(UsersContract, StocksContract.address);
  });
};
