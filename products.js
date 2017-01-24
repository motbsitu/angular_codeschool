(function(){
  var app = angular.module('store-products', []);

  app.directive('productTitle', function(){
    return {
      restrict: 'E', //type of directive - new HTML element
      //use restrict: 'A', if an attribute directive - in HTML would be
      //<h3 product-title></h3>, normally used for mixin behaviors
      templateUrl: 'product-title.html'
    };
  });

  app.directive('productDescription', function(){
    return{
      restrict: 'E',
      templateUrl: 'product-description.html'
    };
  });
// attribute directive
  app.directive("productSpecs", function(){
    return{
      restrict: 'A',
      templateUrl: "product-specs.html"
    };
  });

  app.directive("productPanels", function(){
    return{
      restrict:'E',
      templateUrl: 'product-panels.html',
      controller: function(){
          this.tab = 1;

          this.isSelected = function(checkTab){
            return this.tab === checkTab;
          };

          this.selectTab = function(setTab){
            this.tab = setTab;
            console.log(this.tab);
          };

        },
        controllerAs:'panels'
    };
  });

    app.directive("productGallery", function(){
      return{
        restrict: 'E',
        templateUrl: 'product-gallery.html',
        controller: function(){
          this.current = 0;
          this.setCurrent = function(imageNumber){
          this.current = imageNumber || 0;
      };
    }, controllerAs: 'gallery'
    };
    });



})();
