window.flapperNews = angular.module('flapperNews', ['ui.router', 'templates'])
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
        });

        $urlRouterProvider.otherwise('home');
    }
  ])
  