var CryptoDoggies = artifacts.require("CryptoDoggies.sol");

contract("CryptoDoggies", function(accounts) {
  var helpfulFunctions = require("./utils/CryptoDoggiesUtils")(
    CryptoDoggies,
    accounts
  );
  var hfn = Object.keys(helpfulFunctions);

  for (var i = 0; i < hfn.length; i++) {
    global[hfn[i]] = helpfulFunctions[hfn[i]];
  }

  checkDoggyCreation(5, "Doggy-5", "0x0f0f0f0f0f");

  // for (x = 0; x < 100; x++) {
  //   checkDoggyCreation(x, "Doggy-" + x, "0x0f0f0f0f0f");
  // }
});
