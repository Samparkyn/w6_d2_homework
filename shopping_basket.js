var basket = {
  tennis_racket: {
    name: 'Wilson Pro Open',
    price: '180',
    buyOneGetOneFree: true
  },
  gymbag: {
    name: 'Blue UnderArmour Bag',
    price: '80',
    buyOneGetOneFree: false
  },
  shoes: {
    name: 'Nike Air Gymshoes',
    price: '200',
    buyOneGetOneFree: true
  }
};

var shoppingBasket = {
  total: 0,
  basket: [],
  addItem: function(item){
    this.basket.push(basket[item]);
    this.total += parseInt(basket[item].price);
  }
};

module.exports = shoppingBasket;