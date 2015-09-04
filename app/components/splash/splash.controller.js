angular
  .module('hearthCompanion.splash')
  .controller('SplashController', SplashController);

function SplashController(splashFactory) {
  var vm = this;

  angular.extend(vm, {
    clicked: 0
  });

  vm.inc = function(){
    vm.clicked++;
    splashFactory.print(vm.clicked);
  }
}
