
'use strict';


var dashServices = angular.module('dashServices', ['ngResource','dashControllers']);
var baseURI = "http://localhost:9000";
// var baseURI = "https://inyards.com";

dashServices.factory('Auth', function($http){
    var user={};

    user.authenticate = function(data){
        return $http.post(baseURI + '/admin', data);
    };

    return user;
});

dashServices.factory('Users', function($http){
  var user={};

  // Get All Teams
  user.getAllUsers=function() {
      return $http.get(baseURI+'/users');
  };


/*


  user.getPlayerDetails=function(playerId) {
      return $http.get(baseURI+'/player/'+playerId);
  };

  user.getAllPlayers=function() {
      return $http.get(baseURI+'/players');
  };

  user.newPlayerAvailability=function(playerId){
      return $http.post(baseURI+'/player/id',{"playerId":playerId});
  };

  user.newPlayer=function(player){
      return $http.post(baseURI+'/player/',player);
  };

  user.deletePlayer=function(playerId){
      return $http.delete(baseURI+'/player/'+playerId);
  };

  user.updatePlayer=function(player){
      return $http.put(baseURI+'/player/',player);
  };

  user.getLiveMatches=function(){
      return $http.get(baseURI+'/liveFixtures');
  };

  user.getUpcomingMatches=function(){
      return $http.get(baseURI+'/upcomingFixtures');
  };

  user.getPastMatches=function(){
      return $http.get(baseURI+'/historyFixtures');
  };*/

  return user;
})

dashServices.factory('Football', function($http){
    var user={};

    // Get All Teams
    user.getAllTeams=function() {
        return $http.get(baseURI+'/teams');
    };

    user.newTeamAvailability=function(teamId){
        return $http.post(baseURI+'/team/id',{"teamId":teamId});
    };

    user.newTeam=function(team){
        return $http.post(baseURI+'/team/',team);
    };

    user.deleteTeam=function(teamId){
        return $http.delete(baseURI+'/team/'+teamId);
    };

    user.updateTeam=function(team){
        return $http.put(baseURI+'/team/',team);
    };

    user.getTeamDetails=function(teamId) {
        return $http.get(baseURI+'/team/'+teamId);
    };

    user.toggleMatchStatus=function(matchId, active) {
        return $http.put(baseURI+'/fixture',{"matchId":matchId, "active":active})
    }

    user.getPlayerDetails=function(playerId) {
        return $http.get(baseURI+'/player/'+playerId);
    };

    user.getAllPlayers=function() {
        return $http.get(baseURI+'/players');
    };

    user.newPlayerAvailability=function(playerId){
        return $http.post(baseURI+'/player/id',{"playerId":playerId});
    };

    user.newPlayer=function(player){
        return $http.post(baseURI+'/player/',player);
    };

    user.deletePlayer=function(playerId){
        return $http.delete(baseURI+'/player/'+playerId);
    };

    user.updatePlayer=function(player){
        return $http.put(baseURI+'/player/',player);
    };

    user.getLiveMatches=function(){
        return $http.get(baseURI+'/liveFixturesAdmin');
    };

    user.getUpcomingMatches=function(){
        return $http.get(baseURI+'/upcomingFixturesAdmin');
    };

    user.getPastMatches=function(){
        return $http.get(baseURI+'/historyFixturesAdmin');
    };



    return user;
    });
