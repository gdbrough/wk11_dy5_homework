var assert = require('assert');
var Store = require('../store.js');

describe("Store", function(){

  var store1; //Name, City and an Inventory

  beforeEach(function(){
    store1 = new Store("Record Shop", "Embra", []);
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

});





// Food should have a name
// Food should have a replenishment value
