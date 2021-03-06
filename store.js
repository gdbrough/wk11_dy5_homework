const _ = require("lodash");

var Store = function(name, city, inventory) {
  this.name = name;
  this.city = city;
  this.inventory = inventory;
  this.storeBalance = 100.00;
}

Store.prototype.addRecord = function(recordtoAdd) {
  this.inventory.push(recordtoAdd);
};

Store.prototype.listFullInventory = function () {
  let currentInventoryList = "";
  for (record of this.inventory){
    currentInventoryList += record.printDetails();
  }
  return currentInventoryList;
};

Store.prototype.sellRecord = function(recordToSell) {
  this.storeBalance += recordToSell.price
  this.inventory = _.remove(this.inventory, record => record !== recordToSell);
};

Store.prototype.financialReport = function () {
  let totalInventoryValue = _.sumBy(this.inventory, record => record.price);
  return "Store Balance: £" + this.storeBalance + ". Inventory Total: £" + totalInventoryValue + "."
};

Store.prototype.recordsByGenre = function(searchGenre) {
  return _.filter(this.inventory, record => record.genre === searchGenre);
};

module.exports = Store;
