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

});
