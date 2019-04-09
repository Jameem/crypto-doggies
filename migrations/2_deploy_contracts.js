var CryptoDoggies = artifacts.require("CryptoDoggies.sol");

module.exports = function(deployer) {
  deployer.deploy(CryptoDoggies);
};
