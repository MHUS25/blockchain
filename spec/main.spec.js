const {
  Block,
  Blockchain
} = require("../main.js");

describe("Blockchain", () => {
  beforeEach(function() {
    fakeCoin = new Blockchain();
  });

  it("Adds a new block to blockchain", () => {
    fakeCoin.addBlock(new Block(1, "6/02/2019", { amount: 10 }));
    expect((fakeCoin.chain.length)).toEqual(2);
  });

  it("Can add more than one block to blockchain", () => {
    fakeCoin.addBlock(new Block(1, "6/02/2019", { amount: 10 }));
    fakeCoin.addBlock(new Block(2, "7/02/2019", { amount: 20 }));
    expect((fakeCoin.chain.length)).toEqual(3);
  });

  it("Can check if a chain is valid", () => {
    fakeCoin = new Blockchain();
    fakeCoin.addBlock(new Block(1, "6/02/2019", { amount: 10 }));
    fakeCoin.addBlock(new Block(2, "7/02/2019", { amount: 20 }));
    console.log(fakeCoin);
    expect((fakeCoin.isChainValid())).toEqual(true);
    fakeCoin.chain[1].data = { amount: 100 };
    expect((fakeCoin.isChainValid())).toEqual(false);
  });
});
