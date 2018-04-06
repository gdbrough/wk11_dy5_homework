var assert = require('assert');
var Collector = require('../collector.js');
var Store = require('../store.js');
var Record = require('../record.js');

describe("Collector", function(){

  var store1; //Name, City and an Inventory
  var record1; //Artist, Title, Genre, and Price
  var collector1; //Name, Cash

  beforeEach(function(){
    collector1 = new Collector("Allan", 100.00);
    record1 = new Record("The Cult", "Electric", "rock", 12.99);
    record2 = new Record("Velvet Revolver", "Contraband", "rock", 8.99);
    record3 = new Record("AC/DC", "Highway to Hell", "rock", 9.99);
    record4 = new Record("Eminem", "Encore", "rap", 4.99);
    record5 = new Record("Guns 'n' Roses", "Appetite for Destruction", "rock", 11.99);
    store1 = new Store("Record Shop", "Embra", [record1, record2, record3, record4, record5]);
  });

  it("should have a name", function(){
    assert.strictEqual(collector1.name, "Allan");
  });

  it("should have a cash balance", function(){
    assert.strictEqual(collector1.cash, 100.00);
  });

  it("should start with an empty inventory", function(){
    assert.strictEqual(collector1.collection.length, 0);
  });

  it("should be able to buy records", function(){
    collector1.buyRecord(record1, store1);
    assert.strictEqual(collector1.cash, 87.01);
    assert.deepEqual(collector1.collection, [record1]);
  });

  it("should not be able to buy records when does not have enough cash", function(){
    collector2 = new Collector("Skint", 10.00);
    collector2.buyRecord(record1, store1);
    assert.strictEqual(collector2.cash, 10.00);
    assert.strictEqual(collector2.collection.length, 0);
  });

  it("should be able to view total value of collection", function(){
    collector1.buyRecord(record1, store1);
    collector1.buyRecord(record2, store1);
    collector1.buyRecord(record3, store1);
    collector1.buyRecord(record5, store1);
    assert.strictEqual(collector1.collectionValue(), 43.96);
  });

  it("should be able to view total value of collection by genre", function(){
    collector1.buyRecord(record1, store1);
    collector1.buyRecord(record2, store1);
    collector1.buyRecord(record3, store1);
    collector1.buyRecord(record4, store1);
    assert.strictEqual(collector1.collectionValue("rock"), 31.97);
  });

  it("should be able to view most expensive record in collection", function(){
    collector1.buyRecord(record1, store1);
    collector1.buyRecord(record2, store1);
    collector1.buyRecord(record3, store1);
    assert.deepEqual(collector1.mostExpensive(), record1);
  });

  it("should be able to sort collection by value", function(){
    collector1.buyRecord(record1, store1);
    collector1.buyRecord(record2, store1);
    collector1.buyRecord(record3, store1);
    collector1.buyRecord(record4, store1);
    collector1.buyRecord(record5, store1);
    assert.deepEqual(collector1.sortByPrice(), [record4, record2, record3, record5, record1])
  });

  it("should be able to sort collection by value - descending", function(){
    collector1.buyRecord(record1, store1);
    collector1.buyRecord(record2, store1);
    collector1.buyRecord(record3, store1);
    collector1.buyRecord(record4, store1);
    collector1.buyRecord(record5, store1);
    assert.deepEqual(collector1.sortByPrice("desc"), [record1, record5, record3, record2, record4])
  });

  it("should be able to compare collection value with another", function(){
      collector1.buyRecord(record2, store1);
      collector1.buyRecord(record3, store1);
      collector1.buyRecord(record4, store1);
      collector1.buyRecord(record5, store1);
      collector2 = new Collector("Skint", 15.00);
      collector2.buyRecord(record1, store1);
      assert.strictEqual(collector1.compareCollectionValue(collector2), "My Collection Value: £35.96. Other Collection Value: £12.99.");
  });

});
