/**
 * @summary Description
 *
 * @author Peter Javorka <peter.javorka@artin.cz>
 * @since 12/7/16.
 */

'use strict';
angular.module('additionalService').component('additionalServiceDetail', {
  templateUrl: 'additionalService/template/additionalService-detail.template.html',
  controller: ['$routeParams', 'AdditionalService',
    function AddtionalServiceDetailCtrl($routeParams, AdditionalService) {
      console.log('it is working');
    }
  ]
});

