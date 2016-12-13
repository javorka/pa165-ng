'use strict';

angular.module('pneuservis').config(['$locationProvider', '$routeProvider',
  function config($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.when('/phones', {
      template: '<additional-service-detail></additional-service-detail>'
    }).when('/phones/:phoneId', {
      template: '<phone-detail></phone-detail>'
    }).otherwise('/phones');
  }
]);
