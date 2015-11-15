(function () {
  'use strict';
  
  angular
    .module('se2015.routes')
    .config(config);

  config.$inject = ['$routeProvider'];

  /**
  * @name config
  * @desc Define valid application routes
  */
  function config($routeProvider) {
    $routeProvider.when('/register', {
      controller: 'RegisterController', 
      controllerAs: 'vm',
      templateUrl: '/static/templates/users/register.html'
    })
    .when('/login', {
      controller: 'LoginController',
      controllerAs: 'vm',
      templateUrl: 'static/templates/users/login.html'
    })
    .when('/learning', {
      controller: 'LearningController',
      controllerAs: 'vm',
      templateUrl: 'static/templates/learning/learning.html'
    })
    .when('/learning/:gradeId', {
      controller: 'SkillController',
      controllerAs: 'vm',
      templateUrl: 'static/templates/learning/skill.html'
    })
    .when('/learning/:gradeId/:skillId', {
      controller: 'QuestionController',
      controllerAs: 'vm',
      templateUrl: 'static/templates/learning/question.html'
    })
    .when('/main', {
      templateUrl: '/static/templates/main/main.html'
    })
    .when('/user/:username', {
      controller: 'ProfileController',
      controllerAs: 'vm',
      templateUrl: 'static/templates/profiles/profile.html'
    })
    .when('/user/:username/settings', {
      controller: 'ProfileSettingsController',
      controllerAs: 'vm',
      templateUrl: '/static/templates/profiles/settings.html'
    })
    .otherwise('/main')
  }
})();