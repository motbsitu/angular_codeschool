(function(){
  var app = angular.module('gemStore', []);

  app.controller('StoreController', function(){
    this.products = gems;
  });

  var gems = [
      {name: 'Dodecahedron', price: 2.95, description: 'Bacon ipsum dolor amet andouille turducken flank hamburger tenderloin jerky.',
        canPurchase: true, soldOut: false},
      {name: 'Pentagonal Gem', price: 5.95, description: 'Meatloaf pork ball tip andouille strip steak picanha boudin, hamburger tenderloin prosciutto.',
        canPurchase: false,soldOut: true},
      { name: 'Azurite', price: 2.95, canPurchase: true,
        images:[ "images/gem-02.gif", "images/gem-05.gif", "images/gem-09.gif" ]},
      { name: 'Bloodstone', price: 5.95, canPurchase: true,
        images:["images/gem-01.gif", "images/gem-03.gif", "images/gem-04.gif" ] },
      { name: 'Zircon', price: 3.95, canPurchase: true,
        images:["images/gem-06.gif", "images/gem-07.gif" ]
      }];
})();
