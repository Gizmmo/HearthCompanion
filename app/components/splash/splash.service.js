angular
  .module('hearthCompanion.splash')
  .factory('splashFactory', splashFactory);

  function splashFactory() {
    var service = {
      print : function(clickedAmount) {
        console.log(clickedAmount);
      }
    }

    return service;
  }
