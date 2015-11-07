'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:MapCtrl
 * @description
 * # MapCtrl
 * Controller of the testApp
 */
angular.module('testApp')
  .controller('MapCtrl',['$scope', 'propertyBoundaries','leafletData', function ($scope, propertyBoundaries, leafletData) {

    angular.extend($scope, {
       center: {
            lat: -43.5152097,
            lng: 171.6178138,
            zoom: 13
        },
        defaults: {
            tileLayer: 'http://api.tiles.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiYW1lbGlhbGF1bmR5IiwiYSI6ImNpZ29sZTZoYjAwN2N1ZWtvazI2NnVrM2QifQ.M9p5JJxnaWi0r3xzLwJLXg',
            maxZoom: 14,
            path: {
                weight: 10,
                color: '#800000',
                opacity: 0.5
            }
        }
    });
    var setMapData = function(data) {
        leafletData.getMap().then(function(map) {
            L.geoJson(data).addTo(map);
        })
    }
    var sortMetricsByName = function(metrics) {
        return metrics.sort(function(a,b){if(a.name == b.name){return 0}else if(a.name < b.name){return -1} else{return 1}})

    }
    leafletData.getMap().then(function(map) {
        map.on('click', function(e) {
            propertyBoundaries.getBoundaries(e.latlng.lat, e.latlng.lng).then(function(res) {
                setMapData(res.data.boundaries)
                $scope.metrics = sortMetricsByName(res.data.metrics)
            })
        }) 
    })
  }]);
