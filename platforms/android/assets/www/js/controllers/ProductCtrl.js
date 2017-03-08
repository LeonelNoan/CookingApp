app

    .controller('ProductCtrl', function ($scope, $rootScope, $state, Products) {

        $scope.items = $rootScope.prods ? $rootScope.prods : {};

        if (!$rootScope.prods) {

            Products.allCatalogue(function (prods) {
                $scope.items = prods;
            });

        }

        $scope.showDetail = function (index) {

            var temp = {};

            $rootScope.itemsDetails = [];
            $rootScope.itemsDetails = $scope.items.slice();

            temp = $rootScope.itemsDetails[index];
            $rootScope.itemsDetails[index] = $rootScope.itemsDetails[0];
            $rootScope.itemsDetails[0] = temp;

            $state.go('tab.cat-products-detail');

        };

    })
    .controller('ProductDetailCtrl', function ($scope, $rootScope, $state, $stateParams, $ionicSlideBoxDelegate,  Products) {


        $scope.itemsDetails = $rootScope.itemsDetails ? $rootScope.itemsDetails : {};
        $rootScope.recette = {}

            /*if (!$rootScope.prods) {

                Products.allCatalogue(function (prods) {
                    console.log(prods);
                    $scope.items = prods;
                });

            }*/
        $scope.cook = function (id) {

            Products.getOne(id, function (prod) {
                $rootScope.recette = prod;

                if ($stateParams.type) {
                    $state.go('tab.search-result-detail-cook');
                } else {
                    $state.go('tab.cat-products-detail-cook');
                }
            });

        };


    })

    .controller('CookCtrl', function ($scope, $rootScope, $ionicSlideBoxDelegate, Products) {


        $scope.item = $rootScope.recette ? $rootScope.recette : {};

        
        var end = false;
        var recognition;

        $scope.$on('$ionicView.beforeLeave', function () {
            end = true;
            recognition.stop();
        });

        $scope.$on("$ionicView.afterEnter", function (event, data) {
            // handle event
            //console.log("State Params: ", data.stateParams);
            end = false
            record();

        });

        $scope.nextSlide = function () {

            $ionicSlideBoxDelegate.next();

        }

        var record = function () {

            var recognition = new SpeechRecognition();
            /*recognition = new webkitSpeechRecognition();*/

            recognition.lang = 'fr-FR';

            recognition.onresult = function (event) {

                if (event.results.length > 0) {

                    var tmp = event.results[0][0].transcript;

                    if (tmp == "suivant") {
                        $ionicSlideBoxDelegate.next();
                    }
                    else if (tmp.startsWith("étape")) {

                        var res = tmp.split(" ");
                        $ionicSlideBoxDelegate.slide(parseInt(res[1])-1);

                    }

                    recognition.stop();

                }
            };

            recognition.onend = function (e) {

                if (!end) {
                    record();
                }

            };

            recognition.start();

        };


    });