var basket = {
  items: [],
  discounts: [],
  addItem: function(item){
  this.items.push(item);
  },
  
  getItemCount: function(item){
    var count =0;
    for (var i=0;i< this.items.length;i++){
      if (this.items[i]===item){
        count +=1;
      }
    }
  return count;  
  },

  removeItem: function(item){
    var count = this.items.indexOf(item);
    if (count >-1){
      return this.items.splice(count,1);
    }
    return null;
  },

  emptyBasket: function(){
   while (this.items.length > 0){
    this.items.pop();
   }
  },
  
  getTotalPrice: function(){
    var total = 0;
    for (var i=0; i< this.items.length;i++){
      total += this.items[i].price;
       }
   return total; 
  },

  getDiscount: function(){
    var total = this.getTotalPrice();
    if (total > 20){
      return (total * 0.1);
    }
    return 0;
  },

  getDiscountOnCard: function(card){
    var total = this.getTotalPrice();
    if (card.valid = true){
      return (total * 0.05);
    }
    return 0;
  }

 };



module.exports = basket;