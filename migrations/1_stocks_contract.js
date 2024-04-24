const StocksContract = artifacts.require("./StocksContract.sol");

module.exports = function (deployer) {
  deployer.deploy(StocksContract);
};
