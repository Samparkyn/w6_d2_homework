require('mocha');
var assert = require('chai').assert;
var shoppingBasket = require('../shopping_basket')

describe('Shopping Basket', function(){
  it('should have an initial total of 0', function () {
    assert.equal(0, shoppingBasket.total);
  });

  it('should add an item to the cart', function () {
    shoppingBasket.basket = [];
    shoppingBasket.addItem('tennis_racket');
    assert.equal(1, shoppingBasket.basket.length);
    });

 it('should increase total when adding an item', function () {
  shoppingBasket.basket = [];
  shoppingBasket.total = 0;
   shoppingBasket.addItem('shoes');
   assert.equal(200, shoppingBasket.total);
 });
  });