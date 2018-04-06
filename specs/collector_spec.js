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

});
