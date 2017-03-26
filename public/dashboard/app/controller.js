'use strict';


var dashControllers = angular.module('dashControllers', ['dashServices']);

dashControllers.controller('Login', function ($scope, Auth, $state, $timeout) {
    $scope.user={};
    $scope.btnText="Login";
    $scope.loginError=false;
    $scope.doLogin=function(){
        $scope.btnText="Logging In...";
        var userData = {
            username: $scope.user.username,
            password: $scope.user.password
        };
        
        Auth.authenticate(userData).then(function(res){
            if(res.data.success)
                $state.go('admin.dashboard');
            else{
                $scope.btnText="Login";
                $scope.loginError=true;
                $timeout(function(){
                    $scope.loginError=false;    
                },2000);
            }
        });
    };
});

dashControllers.controller('Dashboard', function () {
});
  
dashControllers.controller('FootFixtures', function($scope, Auth, $state, $timeout) {
    
})
dashControllers.controller('FootApis', function($scope, Auth, $state, $timeout) {
    
})
dashControllers.controller('CricTeams', function($scope, Auth, $state, $timeout) {
    
})
dashControllers.controller('CricPlayers', function($scope, Auth, $state, $timeout) {
    
})
dashControllers.controller('CricFixtures', function($scope, Auth, $state, $timeout) {
    
})
dashControllers.controller('CricApis', function($scope, Auth, $state, $timeout) {
    
})