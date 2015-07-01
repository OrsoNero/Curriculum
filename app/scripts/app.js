'use strict';

/**
 * @ngdoc overview
 * @name curriculumApp
 * @description
 * # curriculumApp
 *
 * Main module of the application.
 */
angular
  .module('curriculumApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/formazione', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/contatti', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .when('/esperienze', {
        templateUrl: 'views/experiences.html',
        controller: 'ExperiencesCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
