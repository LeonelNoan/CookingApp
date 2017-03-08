app

    .controller('SearchCtrl', function ($scope, $state, $rootScope, Products) {
        
        $scope.query = "";

        $scope.search = function (query) {

            $state.go('tab.search-result', { type: query });
            
        }

    })
    .controller('SearchResultCtrl', function ($scope, $state, $stateParams, $rootScope, Products) {
        

        Products.allByLib($stateParams.type, function (prods) {
            $scope.recettes = prods;
        });

        $scope.showDetail = function (index) {

            $rootScope.itemsDetails = [];
            $rootScope.itemsDetails = $scope.recettes;

            if ($scope.recettes.length > 1) {

                var tmp = $rootScope.itemsDetails[index];
                $rootScope.itemsDetails[index] = $rootScope.itemsDetails[0];
                $rootScope.itemsDetails[0] = tmp;

            }

            $state.go('tab.search-detail', {type: 'search'});

        };

    });