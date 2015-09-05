'use strict';

describe('On the deck creator page', function() {

  var deckCreatorController;

  beforeEach(module('hearthCompanion'));


  beforeEach(inject(function($controller) {
    deckCreatorController = $controller('deckCreatorController');
  }));

  // it('should load all cards', function() {
  //   expect(deckCreatorController.allCards.length).toBeGreaterThan(500);
  // });
});
