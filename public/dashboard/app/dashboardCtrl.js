angular.module('dashboardCtrl',['dashServices'])
.controller('Admin', function($scope, $window, $state){
 var hash = $window.location.hash;

  function removeActiveCSS(){
        $("#tabDashboard").removeClass("active");
        // $("#tabUsers").removeClass("active");
        $("#tabPoints").removeClass("active");
        $("#tabUserCust").removeClass("active");
        $("#tabUserVendors").removeClass("active");
        $("#tabUserEmp").removeClass("active");
        $("#tabFootTeams").removeClass("active");
        $("#tabFootPlayers").removeClass("active");
        $("#tabFootFixtures").removeClass("active");
        $("#tabFootApis").removeClass("active");
        $("#tabCricTeams").removeClass("active");
        $("#tabCricPlayers").removeClass("active");
        $("#tabCricFixtures").removeClass("active");
        $("#tabCricApis").removeClass("active");
    }
    function hideAllViews(){
        $scope.showDashboard = false;
        // $scope.showUsers = false;
        $scope.showPointsTable = false;
        $scope.showUserCust = false;
        $scope.showUserEmp = false;
        $scope.showUserVendors = false;
        $scope.showFootTeams = false;
        $scope.showFootPlayers = false;
        $scope.showFootFixtures = false;
        $scope.showFootApis = false;
        $scope.showCricTeams = false;
        $scope.showCricPlayers = false;
        $scope.showCricFixtures = false;
        $scope.showCricApis = false;
    }

  $scope.openDashboard = function(){
        removeActiveCSS();
        $("#tabDashboard").addClass("active");
        hideAllViews();
        $scope.showDashboard = true;
        $state.go('admin.dashboard');
    }
    //  $scope.openUsers = function(){
    //     removeActiveCSS();
    //     $("#tabUsers").addClass("active");
    //     hideAllViews();
    //     $scope.showUsers = true;
    //     $state.go('admin.users');
    // }
    $scope.openPoints = function(){
        removeActiveCSS();
        $("#tabPoints").addClass("active");
        hideAllViews();
        $scope.showPointsTable = true;
        $state.go('admin.points');
    }
    $scope.openUserCust=function(){
      removeActiveCSS();
      $("#tabUserCust").addClass("active");
      hideAllViews();
      $scope.showUserCust = true;
      $state.go('admin.usercust');
    }
    $scope.openUserVendors=function(){
      removeActiveCSS();
      $("#tabUserVendors").addClass("active");
      hideAllViews();
      $scope.showUserEmp = true;
      $state.go('admin.uservendors');
    }
    $scope.openUserEmp=function(){
      removeActiveCSS();
      $("#tabUserEmp").addClass("active");
      hideAllViews();
      $scope.showUserVendors = true;
      $state.go('admin.useremp');
    }
     $scope.openFootTeams = function(){
        removeActiveCSS();
        $("#tabFootTeams").addClass("active");
        hideAllViews();
        $scope.showFootTeams = true;
        $state.go('admin.footteams');
    }
     $scope.openFootPlayers = function(){
        removeActiveCSS();
        $("#tabFootPlayers").addClass("active");
        hideAllViews();
        $scope.showFootPlayers= true;
        $state.go('admin.footplayers');
    }
     $scope.openFootFixtures = function(){
        removeActiveCSS();
        $("#tabFootFixtures").addClass("active");
        hideAllViews();
        $scope.showFootFixtures= true;
        $state.go('admin.footfixtures');
    }
     $scope.openFootApis = function(){
        removeActiveCSS();
        $("#tabFootApis").addClass("active");
        hideAllViews();
        $scope.showFootApis= true;
        $state.go('admin.footapis');
    }
     $scope.openCricTeams = function(){
        removeActiveCSS();
        $("#tabCricTeams").addClass("active");
        hideAllViews();
        $scope.showCricTeams= true;
        $state.go('admin.cricteams');
    }
     $scope.openCricPlayers = function(){
        removeActiveCSS();
        $("#tabCricPlayers").addClass("active");
        hideAllViews();
        $scope.showCricPlayers= true;
        $state.go('admin.cricplayers');
    }
     $scope.openCricFixtures = function(){
        removeActiveCSS();
        $("#tabCricFixtures").addClass("active");
        hideAllViews();
        $scope.showCricFixtures= true;
        $state.go('admin.cricfixtures');
    }
     $scope.openCricApis = function(){
        removeActiveCSS();
        $("#tabCricApis").addClass("active");
        hideAllViews();
        $scope.showCricApis= true;
        $state.go('admin.cricapis');
    }

  if(hash=="#/home/dashboard"){
        $("#tabDashboard").addClass("active");
        $scope.openDashboard();
    }
    // else if(hash=="#/home/users"){
    //     $("#tabUsers").addClass("active");
    //     $scope.openUsers();
    // }
    else if(hash=="#/home/users/customers"){
        $("#tabUserCust").addClass("active");
        $scope.openUserCust();
    }
    else if(hash=="#/home/users/employees"){
        $("#tabUserEmp").addClass("active");
        $scope.openUserEmp();
    }
    else if(hash=="#/home/users/vendors"){
        $("#tabUserVendors").addClass("active");
        $scope.openUserVendors();
    }
    else if(hash=="#/home/football/teams"){
        $("#tabFootTeams").addClass("active");
        $scope.openFootTeams();
    }
    else if(hash=="#/home/football/players"){
        $("#tabFootPlayers").addClass("active");
        $scope.openFootPlayers();
    }
    else if(hash=="#/home/football/fixtures"){
        $("#tabFootFixtures").addClass("active");
        $scope.openFootFixtures();
    }
    else if(hash=="#/home/football/apis"){
        $("#tabFootApis").addClass("active");
        $scope.openFootApis();
    }

    else if(hash=="#/home/cricket/teams"){
        $("#tabCricTeams").addClass("active");
        $scope.openCricTeams();
    }
    else if(hash=="#/home/cricket/players"){
        $("#tabCricPlayers").addClass("active");
        $scope.openCricPlayers();
    }
    else if(hash=="#/home/cricket/fixtures"){
        $("#tabCricFixtures").addClass("active");
        $scope.openCricFixtures();
    }
    else if(hash=="#/home/cricket/apis"){
        $("#tabCricApis").addClass("active");
        $scope.openCricApis();
    }
});
