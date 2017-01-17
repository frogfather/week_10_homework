var item = require("../item");
var assert = require("assert");

describe("item", function(){

  it("should have a name", function(){
    item.name = "corn flakes";
    item.price = 1.10;
    assert.equal("corn flakes",item.name);
  });

});