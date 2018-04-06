var assert = require('assert');
var Store = require('../store.js');
var Record = require('../record.js');

describe("Store", function(){

  var store1; //Name, City and an Inventory
  var record1; //Artist, Title, Genre, and Price

  beforeEach(function(){
    store1 = new Store("Record Shop", "Embra", []);
    record1 = new Record("The Cult", "Electric", "rock", 12.99);
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

});





// Food should have a name
// Food should have a replenishment value
