'use strict';

/**
 * @ngdoc service
 * @name testApp.propertyBoundaries
 * @description
 * # propertyBoundaries
 * Factory in the testApp.
 */
angular.module('testApp')
  .factory('propertyBoundaries',['$http', function ($http) {
    // Service logic
    // ...

    // Public API here
    return {
      getBoundaries: function(lat, lng) {
          return $http.get('http://localhost:3000', {params: {lat: lat, lng: lng}});
      }
    };
  }]);
