'use strict';

/**
 * @ngdoc function
 * @name curriculumApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the curriculumApp
 */
angular.module('curriculumApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
