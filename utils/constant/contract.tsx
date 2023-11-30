const contracts = {
    eth: "0x2170Ed0880ac9A755fd29B2688956BD959F933F8",
    bnb: "0xB8c77482e45F1F44dE1745F52C74426C631bDD52",
    matic:"0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0",
    avax: "0x1ce0c2827e2ef14d5c4f29a091d735a204794041",
    ftm: "0x4E15361FD6b4BB609Fa63C81A2be19d873717870",
    usdt: '0xdAC17F958D2ee523a2206206994597C13D831ec7'
}

const domain = {
    name: "name",
    version: "1",
    chainId: "chainId",
    verifyingContract: "myToken.address"
  };
const ty = {
    
}
  const types = {
    Permit: [{
        name: "owner",
        type: "address"
      },
      {
        name: "spender",
        type: "address"
      },
      {
        name: "value",
        type: "uint256"
      },
      /*
      {
        name: "nonce",
        type: "uint256"
      },
      {
        name: "deadline",
        type: "uint256"
      },*/
    ],
  };

  // set the Permit type values
  /*
  const values = {
    owner: tokenOwner.address,
    spender: tokenReceiver.address,
    value: value,
   // nonce: nonces,
   // deadline: deadline,
  };*/

