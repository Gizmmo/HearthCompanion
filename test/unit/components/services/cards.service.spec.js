'use strict';

describe('The cards service', function () {

var cardsFactory;
var $http;
var $q;
var cardsJson;
var $rootScope;

  beforeEach(module('hearthCompanion'));

  beforeEach(module(function($provide) {
    $http = jasmine.createSpyObj('$http', ['get']);
    $provide.value('$http', $http);
  }));

  beforeEach(inject(function(_cardsFactory_, _$q_, _$rootScope_) {
    cardsFactory = _cardsFactory_;
    $q = _$q_;
    $rootScope = _$rootScope_;
  }));

  beforeEach(function() {
    cardsJson = angular.copy(window.__fixtures__['/json/cards']);
    $http.get.and.returnValue($q.when(cardsJson));
  });

  describe('when getting all cards', function() {

    it('calls a get request', function () {
      cardsFactory.getAllCards();
      expect($http.get).toHaveBeenCalled();
    });

    it('return JSON data in response', function () {
      var returnValue = cardsFactory.getAllCards();
      $rootScope.$digest();
      expect(returnValue.$$state.value).toBe(cardsJson.data);
    });
  });

});
