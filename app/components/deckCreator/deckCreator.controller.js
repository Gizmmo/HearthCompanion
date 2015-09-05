'use strict';

angular
  .module('hearthCompanion.deckCreator')
  .controller('DeckCreatorController', DeckCreatorController);

function DeckCreatorController(cardsFactory) {
  var vm = this;

  angular.extend(vm, {
    allCards: [],
    heroCards: [],
  });

  getCards();

  function getCards() {
    cardsFactory.getAllCards().then(function(result) {
      vm.allCards = result;
    });
  }

}
