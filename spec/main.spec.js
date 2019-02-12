const {
  Block,
  Blockchain
} = require("../main.js");

describe("Blockchain", () => {
  beforeEach(function() {
    litCoin = new Blockchain();
  });

  it("Adds a new block to blockchain", () => {
    litCoin.addBlock(new Block(1, "6/02/2019", { amount: 10 }));
    expect((litCoin.chain.length)).toEqual(2);
  });

  it("Can add more than one block to blockchain", () => {
    litCoin.addBlock(new Block(1, "6/02/2019", { amount: 10 }));
    litCoin.addBlock(new Block(2, "7/02/2019", { amount: 20 }));
    expect((litCoin.chain.length)).toEqual(3);
  });

  it("Can check if a chain is valid", () => {
    litCoin = new Blockchain();
    litCoin.addBlock(new Block(1, "6/02/2019", { amount: 10 }));
    litCoin.addBlock(new Block(2, "7/02/2019", { amount: 20 }));
    console.log(litCoin);
    expect((litCoin.isChainValid())).toEqual(true);
    litCoin.chain[1].data = { amount: 100 };
    expect((litCoin.isChainValid())).toEqual(false);
  });
});
