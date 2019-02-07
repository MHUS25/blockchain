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
});
