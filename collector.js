var Collector = function(name, cash) {
  this.name = name;
  this.cash = cash;
  this.collection = [];
};

Collector.prototype.buyRecord = function(recordToBuy, storeToBuyFrom) {
  if (recordToBuy.price <= this.cash){
    storeToBuyFrom.sellRecord(recordToBuy);
    this.cash -= recordToBuy.price;
    this.collection.push(recordToBuy);
  };
};

module.exports = Collector;
