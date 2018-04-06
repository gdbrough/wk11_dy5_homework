var Store = function(name, city, inventory) {
  this.name = name;
  this.city = city;
  this.inventory = inventory;
  this.storeBalance = 100.00;
}

Store.prototype.addRecord = function(recordtoAdd) {
  this.inventory.push(recordtoAdd);
};

module.exports = Store;
