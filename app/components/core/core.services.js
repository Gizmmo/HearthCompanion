'use strict';

angular
  .module('hearthCompanion.core')
  .factory('_', lodash);

  function lodash($window) {
    return $window._;
  }
