var assert = require('assert');
var Record = require('../record.js');

describe("Record", function(){

  var record1; //Artist, Title, Genre, and Price

  beforeEach(function(){
    record1 = new Record("The Cult", "Electric", "rock", 12.99);
  });

  it("should have a name", function(){
    assert.strictEqual(record1.artist, "The Cult");
  });

  it("should have a name", function(){
    assert.strictEqual(record1.title, "Electric");
  });

  it("should have a genre", function(){
    assert.strictEqual(record1.genre, "rock");
  });

  it("should have a price", function(){
    assert.strictEqual(record1.price, 12.99);
  });

});





// Food should have a name
// Food should have a replenishment value
