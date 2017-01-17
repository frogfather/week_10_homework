var basket = require("../basket");
var items = require("../item");
var discountCard = require("../card");
var assert = require("assert");


describe("basket", function(){

  beforeEach(function() {
  basket.emptyBasket();
  });


  it("should be able to add an item", function(){
    basket.addItem(items[0]);
    assert.equal(1,basket.getItemCount(items[0]));
  });

  it("should be able to remove an item", function(){
    basket.addItem(items[0]);
    assert.equal(1,basket.getItemCount(items[0]));
    basket.removeItem(items[0]);
    assert.equal(0,basket.getItemCount(items[0]));
  });

  it("should be able to get the total value of the basket", function(){
    basket.addItem(items[0]);
    basket.addItem(items[1]);
    assert.equal(1, basket.getItemCount(items[0]));
     assert.equal(1.89,Math.round(100*basket.getTotalPrice())/100);
  });

  it("should be able to find the discount over £20", function(){
    basket.addItem(items[2]);
    assert.equal(2.5, basket.getDiscount());
    });

  it("should be able to apply a discount card", function(){
    basket.addItem(items[2]);
    assert.equal(1.25, basket.getDiscountOnCard(discountCard));
    });

});