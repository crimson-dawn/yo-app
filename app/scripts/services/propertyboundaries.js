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
          return $http.get('http://crimson-server-dev.elasticbeanstalk.com', {params: {lat: lat, lng: lng}});
      }
    };
  }]);
