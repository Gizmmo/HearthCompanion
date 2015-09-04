angular
  .module('hearthCompanion.splash')
  .config(load);

function load($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');


  $stateProvider
    .state('splash', {
      url: '/',
      templateUrl: 'components/splash/splash.html',
      controller: 'SplashController as vm'
    });

}
