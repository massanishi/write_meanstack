
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
            }).then(function(){
                $scope.postBody = null;
            })
        }
    }

    $scope.$on('ws:new_post', function(_, post){
        $scope.$apply(function(){
            $scope.posts.unshift(post);
        })
    })
})