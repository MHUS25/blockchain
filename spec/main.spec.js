const {
  Block,
  Blockchain,
  Transaction
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

  it("Can check the balance of an address", () => {
    fitCoin = new Blockchain();
    fitCoin.createTransaction(new Transaction('address1', 'address2', 100));
    fitCoin.createTransaction(new Transaction('address2', 'address1', 50));
    console.log('\n Starting miner...');
    fitCoin.minePendingTransactions('test-address');
    console.log('\nBalance is', fitCoin.getBalanceOfAddress('test-address'))
    expect((fitCoin.getBalanceOfAddress('test-address'))).toEqual(0);
    console.log('\n Starting miner again...');
    fitCoin.minePendingTransactions('test-address');
    expect((fitCoin.getBalanceOfAddress('test-address'))).toEqual(100);
  });
});