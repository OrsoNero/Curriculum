'use strict';

/**
 * @ngdoc function
 * @name curriculumApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the curriculumApp
 */
angular.module('curriculumApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
