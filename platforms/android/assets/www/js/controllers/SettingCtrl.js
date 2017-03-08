app

    .controller('SettingCtrl', function ($scope, $rootScope, $ionicSlideBoxDelegate) {
        // With the new view caching in Ionic, Controllers are only called
        // when they are recreated or on app start, instead of every page change.
        // To listen for when this page is active (for example, to refresh data),
        // listen for the $ionicView.enter event:
        //
        //$scope.$on('$ionicView.enter', function(e) {
        //});

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

        var record = function () {

            /*var recognition = new SpeechRecognition();*/
            recognition = new webkitSpeechRecognition();

            recognition.lang = 'fr-FR';

            recognition.onresult = function (event) {

                if (event.results.length > 0) {

                    $ionicSlideBoxDelegate.next();
                    console.log(recognition);

                }
            };

            recognition.onend = function (e) {

                if (!end) {
                    record();
                }

                //console.log("end");

            };

            recognition.start();

        };

        $scope.nextSlide = function () {

            $ionicSlideBoxDelegate.next();

            console.log(recognition);
        }

        $scope.cats = [];
       // $scope.cats = Categories.all();

        /*$scope.showList = function (typeSelected) {

            $state.go('tab.cat-products', { type: typeSelected });

        }*/

    });