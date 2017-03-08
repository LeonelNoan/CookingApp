app

    .controller('HomeCtrl', function ($scope, $rootScope, $location, $state, $ionicSlideBoxDelegate, Categories, Products) {
        // With the new view caching in Ionic, Controllers are only called
        // when they are recreated or on app start, instead of every page change.
        // To listen for when this page is active (for example, to refresh data),
        // listen for the $ionicView.enter event:
        //
        //$scope.$on('$ionicView.enter', function(e) {
        //});

        $scope.cats = {};
        $scope.cats = Categories.all();

        Products.allCatalogue(function (prods) {

            var itms = [];
            itms[0] = prods[0];
            itms[1] = prods[1];
            itms[2] = prods[2];

            $scope.recettes = itms;
            $ionicSlideBoxDelegate.update();

        });

        $scope.showList = function (typeSelected) {

            if (typeSelected == 4) {

                Products.allByLvl(function (prods) {
                    console.log(prods);
                    $rootScope.prods = prods;
                    $state.go('tab.cat-products');
                    //$location.path('/cat/products');
                });

            } else if (typeSelected == 5) {
                Products.allCatalogue(function (prods) {
                    console.log(prods);
                    $rootScope.prods = prods;
                    $state.go('tab.cat-products');
                    //$location.path('/cat/products');
                });
            } else if (typeSelected == 1 || typeSelected == 2 || typeSelected == 3) {

                Products.all(typeSelected, function (prods) {
                    console.log(prods);
                    $rootScope.prods = prods;
                    $state.go('tab.cat-products');
                    //$location.path('/cat/products');
                });

            } else {

                Products.allByLib(typeSelected, function (prods) {
                    $rootScope.prods = prods;
                    $state.go('tab.cat-products');
                    //$location.path('/cat/products');
                });
            }

        };
        

        $scope.showDetail = function (index) {

            $rootScope.itemsDetails = [];
            $rootScope.itemsDetails = $scope.recettes;
            var tmp = $rootScope.itemsDetails[index];
            $rootScope.itemsDetails[index] = $rootScope.itemsDetails[0];
            $rootScope.itemsDetails[0] = tmp;

            $state.go('tab.cat-products-detail');

        };

    });