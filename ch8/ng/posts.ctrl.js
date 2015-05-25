
app.controller('PostsCtrl', function($scope, PostsSvc) {

    PostsSvc.fetch().success(function(posts) {
        console.log(posts);
        $scope.posts = posts;
    })

    $scope.addPost = function() {
        if ($scope.postBody) {
            PostsSvc.create({
                username: 'dickeyxxx',
                body: $scope.postBody
            }).success(function(post) {

                $scope.posts.unshift(post);
                $scope.postBody = null;
            })
        }
    }
})