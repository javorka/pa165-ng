/**
 * @summary Description
 *
 * @author Peter Javorka <peter.javorka@artin.cz>
 * @since 12/7/16.
 */

'use strict';
angular.module('additionalService').factory('AdditionalService', ['$resource', function ($resource) {
  return $resource('phones/:phoneId.json', {}, {
    query: {
      method: 'GET',
      params: { phoneId: 'phones' },
      isArray: true
    }
  });
}
]);
