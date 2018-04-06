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
  // return this.inventory;
};

module.exports = Store;
