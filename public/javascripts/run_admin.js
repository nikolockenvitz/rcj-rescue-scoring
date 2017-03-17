angular.module("RunAdmin", ['ngAnimate']).controller('RunAdminController', ['$scope', '$http', '$log','$location', function($scope, $http, $log, $location){
  $scope.competitionId = competitionId
  
  
  updateRunList();

  (function launchSocketIo() {
        // launch socket.io
        var socket = io.connect(window.location.origin);
            socket.emit('subscribe', 'competition/' + competitionId);
            socket.on('changed', function(data) {
                updateRunList();
            });
        

    })();
  $http.get("/api/competitions/" + competitionId).then(function (response) {
    $scope.competition = response.data
  })

  $http.get("/api/competitions/" + competitionId +
            "/teams").then(function (response) {
    $scope.teams = response.data
    console.log($scope.teams);
  })
  $http.get("/api/competitions/" + competitionId +
            "/rounds").then(function (response) {
    $scope.rounds = response.data
  })
  $http.get("/api/competitions/" + competitionId +
            "/fields").then(function (response) {
    $scope.fields = response.data
  })
  $http.get("/api/maps").then(function (response) {
    $scope.maps = response.data
  })

  $scope.addRun = function () {
    if ($scope.run === undefined ||
        $scope.run.round === undefined ||
        $scope.run.team === undefined ||
        $scope.run.map === undefined ||
        $scope.run.field === undefined) {
      return
    }

    var run = {
      round      : $scope.run.round._id,
      team       : $scope.run.team._id,
      field      : $scope.run.field._id,
      map        : $scope.run.map._id,
      competition: competitionId
    }

    console.log(run)

    $http.post("/api/runs/createrun", run).then(function (response) {
      console.log(response)
      updateRunList()
    }, function (error) {
      console.log(error)
    })
  }

  $scope.removeRun = function (run) {
    swal({
          title: "Delete Run?", 
          text: "Are you sure you want to remove the run?", 
          type: "warning",
          showCancelButton: true,
          confirmButtonText: "Yes, delete it!",
          confirmButtonColor: "#ec6c62"
        }, function() {
        $http.get("/api/runs/" + run._id + "/delete").then(function (response) {
        console.log(response)
        updateRunList()
      }, function (error) {
        console.log(error)
      })
    });
  }

  function updateRunList() {
    $http.get("/api/competitions/" + competitionId +
              "/runs?populate=true").then(function (response) {
      $scope.runs = response.data
    })
  }
    $scope.go_sign = function(runid){
        swal({
          title: "Go sign page?", 
          text: "Are you sure you want to go sign page?  If you click 'GO', the signatures will remove.", 
          type: "warning",
          showCancelButton: true,
          confirmButtonText: "GO!",
          confirmButtonColor: "#ec6c62"
        }, function() {
            $scope.go('/line/sign/'+runid+'/');
         });
    }
    
    $scope.go_judge = function(runid){
        swal({
          title: "Go judge page?", 
          text: "Are you sure you want to go judge page?  If you click 'GO', the time and signatures will remove.", 
          type: "warning",
          showCancelButton: true,
          confirmButtonText: "GO!",
          confirmButtonColor: "#ec6c62"
        }, function() {
            $scope.go('/line/judge/'+runid+'/');
         });
    }
    
    $scope.go = function(path){
      window.location = path
  }
    
    
    
}])
.directive("runsReadFinished", function($timeout){
    return function(scope, element, attrs){
      if (scope.$last){
        $('.refine').css("visibility","visible");
        $('.loader').remove();
      }
    }
})

