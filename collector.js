const _ = require("lodash");

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

Collector.prototype.collectionValue = function(searchGenre) {
  if (searchGenre) {
    let genreArray = _.filter(this.collection, record => record.genre === searchGenre);
    return _.sumBy(genreArray, record => record.price);
  } else {
    return _.sumBy(this.collection, record => record.price);
  };
};

Collector.prototype.mostExpensive = function() {
  return _.maxBy(this.collection, record => record.price);
};

Collector.prototype.sortByPrice = function(direction) {
  if (direction){
    return _.orderBy(this.collection, record => record.price, direction);
  } else {
    return _.orderBy(this.collection, record => record.price);
  };
};

Collector.prototype.compareCollectionValue = function (otherCollector) {
  myCollectionValue = this.collectionValue();
  otherCollectionValue = otherCollector.collectionValue();
  return "My Collection Value: £" + myCollectionValue + ". Other Collection Value: £" + otherCollectionValue + ".";
};

module.exports = Collector;
