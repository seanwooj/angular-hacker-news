window.flapperNews = angular.module('flapperNews', ['ui.router', 'templates', 'Devise'])
  .config([
    '$stateProvider','$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('home', {
          url: '/home',
          templateUrl: 'home/_home.html',
          controller: 'MainCtrl',
          resolve: {
            postPromise: ['posts', function (post){
              return post.getAll();
            }]
          }
        })
        .state('posts', {
          url: '/posts/{id}',
          templateUrl: 'posts/_post.html',
          controller: 'PostsCtrl',
          resolve: {
            post: ['$stateParams', 'posts', function ($stateParams, post){
              return post.get($stateParams.id);
            }]
          }
        })
        .state('login', {
          url: '/login',
          templateUrl: 'layout/_login.html',
          controller: 'AuthCtrl',
          onEnter: ['$state', 'Auth', function ($state, Auth){
            Auth.currentUser().then(function (){
              $state.go('home');
            });
          }]
        })
        .state('register', {
          url: '/register',
          templateUrl: 'layout/_register.html',
          controller: 'AuthCtrl',
          onEnter: ['$state', 'Auth', function ($state, Auth){
            Auth.currentUser().then(function (){
              $state.go('home');
            });
          }]
        });

        $urlRouterProvider.otherwise('home');
    }
  ])
  