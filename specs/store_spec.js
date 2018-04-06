var assert = require('assert');
var Store = require('../store.js');
var Record = require('../record.js');

describe("Store", function(){

  var store1; //Name, City and an Inventory
  var record1; //Artist, Title, Genre, and Price

  beforeEach(function(){
    store1 = new Store("Record Shop", "Embra", []);
    record1 = new Record("The Cult", "Electric", "rock", 12.99);
    record2 = new Record("Velvet Revolver", "Contraband", "rock", 8.99);
    record3 = new Record("AC/DC", "Highway to Hell", "rock", 9.99);
    record4 = new Record("Eminem", "Encore", "rap", 4.99);
    record5 = new Record("Guns 'n' Roses", "Appetite for Destruction", "rock", 11.99);
  });

  it("should have a name", function(){
    assert.strictEqual(store1.name, "Record Shop");
  });

  it("should have a city", function(){
    assert.strictEqual(store1.city, "Embra");
  });

  it("should start with an empty inventory", function(){
    assert.strictEqual(store1.inventory.length, 0);
  });

  it("should have an initial balance", function(){
    assert.strictEqual(store1.storeBalance, 100.00)
  });

  it("should add record to store", function(){
    store1.addRecord(record1);
    assert.strictEqual(store1.inventory.length, 1);
    assert.deepEqual(store1.inventory, [record1]);
  });

  it("should list full inventory", function(){
    store1.addRecord(record1);
    store1.addRecord(record3);
    assert.strictEqual(store1.inventory.length, 2);
    assert.strictEqual(store1.listFullInventory(), "Artist: The Cult, Title: Electric, Genre: rock, Price: £12.99. Artist: AC/DC, Title: Highway to Hell, Genre: rock, Price: £9.99. ");
  });

  it ("should be able to sell records", function(){
    store1.addRecord(record1);
    store1.addRecord(record2);
    store1.addRecord(record3);
    store1.addRecord(record4);
    store1.addRecord(record5);
    store1.sellRecord(record3);
    assert.strictEqual(store1.inventory.length, 4);
    assert.deepEqual(store1.inventory, [record1, record2, record4, record5])
    assert.strictEqual(store1.storeBalance, 109.99);
  });

  it("should be able to produce a financial report", function(){
    store1.addRecord(record1);
    store1.addRecord(record2);
    store1.addRecord(record3);
    store1.addRecord(record4);
    store1.addRecord(record5);
    store1.sellRecord(record3);
    assert.strictEqual(store1.financialReport(), "Store Balance: £109.99. Inventory Total: £38.96.")
  });

  it("should be able to view all records of a given genre", function(){
    store1.addRecord(record1);
    store1.addRecord(record2);
    store1.addRecord(record3);
    store1.addRecord(record4);
    store1.addRecord(record5);
    assert.deepEqual(store1.recordsByGenre("rap"), [record4]);
  });

});





// Food should have a name
// Food should have a replenishment value
