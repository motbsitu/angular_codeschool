(function(){
  var app = angular.module('gemStore', []);

  app.controller('StoreController', function(){
    this.products = gems;
  });

  var gems = [
  {
    name: 'Dodecahedron',
    price: 2.95,
    description: 'Bacon ipsum dolor amet andouille turducken flank hamburger tenderloin jerky.',
    canPurchase: true,
    soldOut: false
  },
  {
    name: 'Pentagonal Gem',
    price: 5.95,
    description: 'Meatloaf pork ball tip andouille strip steak picanha boudin, hamburger tenderloin prosciutto.',
    canPurchase: false,
    soldOut: true
  }

];
})();
