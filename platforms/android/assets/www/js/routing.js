
app.config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

    $ionicConfigProvider.tabs.position('bottom');

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

    // setup an abstract state for the tabs directive
      .state('tab', {
          url: '/tab',
          abstract: true,
          templateUrl: 'templates/tabs.html'
      })

    // Each tab has its own nav history stack:
        .state('tab.cat', {
            url: '/home',
            views: {
                'tab-cat': {
                    templateUrl: 'templates/home.html',
                    controller: 'HomeCtrl'
                }
            }
        })

        /*.state('tab.cat', {
            url: '/cat',
            views: {
                'tab-cat': {
                    templateUrl: 'templates/tab-cat.html',
                    controller: 'CatCtrl'
                }
            }
        })*/

      .state('tab.cat-products', {
          url: '/cat/products',
          views: {
              'tab-cat': {
                  templateUrl: 'templates/cat-products.html',
                  controller: 'ProductCtrl'
              }
          }
      })

       .state('tab.cat-products-detail', {
          url: '/cat/products/detail',
          views: {
              'tab-cat': {
                  templateUrl: 'templates/products-detail.html',
                  controller: 'ProductDetailCtrl'
                }
            }
       })

       .state('tab.cat-products-detail-cook', {
          url: '/cat/products/cook',
          views: {
              'tab-cat': {
                  templateUrl: 'templates/tab-cook.html',
                  controller: 'CookCtrl'
                }
            }
        })

    .state('tab.ask', {
        url: '/ask',
        views: {
            'tab-ask': {
                templateUrl: 'templates/tab-ask.html'/*,
          controller: 'AskCtrl'*/
            }
        }
    })

      .state('tab.search', {
          url: '/search',
          views: {
              'tab-search': {
                  templateUrl: 'templates/tab-search.html',
                  controller: 'SearchCtrl'
              }
          }
      })
        
    .state('tab.search-result', {
        url: '/search/results',
        params: {

            type: null
        },
        views: {
            'tab-search': {
                templateUrl: 'templates/tab-search-result.html',
                controller: 'SearchResultCtrl'
            }
        }
    })
    .state('tab.search-detail', {
        url: '/cat/search/detail',
        params: {

            type: null
        },
        views: {
            'tab-search': {
                templateUrl: 'templates/products-detail.html',
                controller: 'ProductDetailCtrl'
            }
        }
    })

    .state('tab.search-result-detail-cook', {
        url: '/cat/search/cook',
        views: {
            'tab-search': {
                templateUrl: 'templates/tab-cook.html',
                controller: 'CookCtrl'
            }
        }
    })

    .state('tab.account', {
        url: '/account',
        views: {
            'tab-account': {
                templateUrl: 'templates/tab-account.html',
                controller: 'AccountCtrl'
            }
        }
    })
    .state('tab.settings', {
        url: '/settings',
        views: {
            'tab-settings': {
                templateUrl: 'templates/tab-settings.html',
                controller: 'SettingCtrl'
            }
        }
    })
    ;

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/home');

});