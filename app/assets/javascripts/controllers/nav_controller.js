window.flapperNews.controller('NavCtrl', [
  '$scope', 'Auth',
  function ($scope, Auth) {
    $scope.signedIn = Auth.isAuthenticated;
    $scope.logout = Auth.logout;

    Auth.currentUser().then(function (user){
      $scope.user = user;
    });
  }
]);