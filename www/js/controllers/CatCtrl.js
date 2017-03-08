app

    .controller('CatCtrl', function ($scope, $state, Categories) {
        // With the new view caching in Ionic, Controllers are only called
        // when they are recreated or on app start, instead of every page change.
        // To listen for when this page is active (for example, to refresh data),
        // listen for the $ionicView.enter event:
        //
        //$scope.$on('$ionicView.enter', function(e) {
        //});
        $scope.cats = {};
        $scope.cats = Categories.all();
        console.log($scope.cats);
        $scope.showList = function (typeSelected) {
            
            $state.go('tab.cat-products', { type: typeSelected });

        }

    });