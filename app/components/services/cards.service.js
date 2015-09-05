'use strict';

angular
  .module('hearthCompanion.services')
  .factory('cardsFactory', cardsFactory);

function cardsFactory($http) {
  var _getPath = 'https://omgvamp-hearthstone-v1.p.mashape.com/cards';

  var service = {
    getAllCards: getAllCards,
    getHeroCards: getHeroCards,
  };

  return service;

  function getAllCards() {
    return $http
      .get(_getPath + '?collectible=1', {
        headers: {
          'X-Mashape-Key': 'QORrTVJomPmshKcAyXMnKpEVt157p1RPjn9jsnLAMDRlth2zuc'
        }
      })
      .then(function(response) {
        return response.data;
      }, function(response) {
        console.log('error: ' + response);
      });

  }

  function getHeroCards() {

  }
}
