const StocksContract = artifacts.require("./StocksContarct.sol");

module.exports = function (deployer) {
  deployer.deploy(StocksContract);
};
