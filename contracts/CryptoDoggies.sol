pragma solidity ^0.4.18;

contract CryptoDoggies {

	uint age = 10;
	uint maxAge = age + 10;
	uint minAge = age - 5;
	uint ultraAge = age ** 2;
	uint modAge = age % 2;

	string name = "Doug";
	string name2 = "Karl";

	struct Doggy {
		uint age;
		string name;
		byte5 dna;
	}

	Doggy doggy1 = Doggy({
		age: age,
		name: name,
		dna: byte5(0x000000000)
	});


}
