window.flapperNews.controller('MainCtrl', [
  '$scope', 'posts',
  function ($scope, post) {
    $scope.posts = post.posts;

    $scope.addPost = function (){
      if (!$scope.title) { return; }
      
      post.create({
        title: $scope.title,
        upvotes: 0,
        link: $scope.link
      });

      $scope.title = '';
      $scope.link = '';
    };

    $scope.incrementUpvotes = function (post_obj) {
      post.upvote(post_obj);
    }

  }
])