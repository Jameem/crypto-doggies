module.exports = function(CryptoDoggies, accounts) {
  function checkDoggyCreation(age, name, dna) {
    it("createDoggy should create a doggy named " + name, function(done) {
      CryptoDoggies.deployed().then(async function(instance) {
        await instance
          .createDoggy(age, name, dna, {
            from: accounts[0]
          })
          .then(function(result) {
            assert.include(
              result.logs[0].event,
              "DoggyCreated",
              "DoggyCreated event was not triggered"
            );
          });
      });
    });
  }

  return {
    checkDoggyCreation: checkDoggyCreation
  };
};
