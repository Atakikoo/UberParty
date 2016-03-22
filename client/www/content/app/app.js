// Ionic App
var app = angular.module('app', ['ionic', 'app.services', 'app.controllers'])


.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'content/app/menu.html',
    controller: 'appCtrl'
  })

  .state('app.login', {
    url: '/login',
    views: {
      'menuContent': {
        templateUrl: 'content/login/login.html'
      }
    }
  })

  .state('app.create', {
      url: '/create',
      views: {
        'menuContent': {
          templateUrl: 'content/create/create.html',
            controller: 'createCtrl'
        }
      }
    })

    .state('app.parties', {
      url: '/parties',
      views: {
        'menuContent': {
          templateUrl: 'content/parties/parties.html',
          controller: 'partiesCtrl'
        }
      }
    })

  .state('app.modifyParties', {
      url: '/modifyParties',
      views: {
        'menuContent': {
          templateUrl: 'content/modifyparties/modifyParties.html'
        }
      }
    })

  .state('app.profil', {
      url: '/profil',
      views: {
        'menuContent': {
          templateUrl: 'content/profil/profil.html'
        }
      }
    })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/parties');
});
