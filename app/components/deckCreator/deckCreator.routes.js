'use strict';

angular
  .module('hearthCompanion.deckCreator')
  .config(loadRoutes);

  function loadRoutes($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('deckCreator', {
        url: '/deck-creator',
        templateUrl: 'components/deckCreator/deckCreator.html',
        controller: 'DeckCreatorController as vm'
      });
  }
