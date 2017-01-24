(function(){
  var app = angular.module('gemStore', ['store-products']);

  app.controller('GalleryController', function(){
   this.current = 0;

   this.setCurrent = function(value){
     this.current = value || 0;
   };
 });

  app.controller("ReviewController", function(){
    this.review ={};

    this.addReview = function(product){
      this.review={"createdOn": Date.now()};
      product.reviews.push(this.review);
      this.review ={};
    };
  });

  app.controller('StoreController', ['$http', function($http){
    var store = this;
    store.products = [];
    $http.get('/store-products.json').success(function(data){
      store.products = data;
    });
  }]);





})();
