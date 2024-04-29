const StocksContract = artifacts.require("StocksContract");

module.exports = function (deployer) {
  deployer.deploy(StocksContract);
};