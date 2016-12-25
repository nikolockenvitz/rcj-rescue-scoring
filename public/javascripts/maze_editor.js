// register the directive with your app module
var app = angular.module('ddApp', ['ngAnimate', 'ui.bootstrap', 'rzModule']);

// function referenced by the drop target
app.controller('ddController', ['$scope', '$uibModal', '$log','$http', function($scope, $uibModal, $log, $http){
    $scope.sliderOptions = {
        floor: 0,
        ceil: 0,
        vertical: true,
        showSelectionBar: true,
        showTicksValues: true,
        ticksValuesTooltip: function (v) {
            return 'Level ' + v;
        }
    };
    $scope.z = 0;
    $scope.startTile = {x: 0, y: 0, z: 0};
    $scope.numberOfCheckpoints = 0;
    $scope.height = 1;
    $scope.sliderOptions.ceil = $scope.height - 1;
    $scope.width = 1;
    $scope.length = 1;
    $scope.name = "Awesome Testbana";
    $scope.cells = {};



    if(mapId){
        $http.get("/api/maps/" + mapId + "?populate=true").then(function(response){
            $scope.startTile = response.data.startTile;
            $scope.numberOfCheckpoints = response.data.numberOfCheckpoints;
            $scope.height = response.data.height;
            $scope.sliderOptions.ceil = $scope.height - 1;
            $scope.width = response.data.width;
            $scope.length = response.data.length;
            $scope.name = response.data.name;
        }, function(response){
            console.log("Error: " + response.statusText);
        });
    }

    $scope.range = function(n){
        arr = [];
        for (var i=0; i < n; i++) {
            arr.push(i);
        }
        return arr;
    }

    $scope.saveMap = function(){
        var map = {
            name: $scope.name,
            length: $scope.length,
            height: $scope.height,
            width: $scope.width,
            numberOfCheckpoints: $scope.numberOfCheckpoints,
            startTile: $scope.startTile
        };

        $http.post("/api/maps/createmap/", map).then(function(response){
            alert("Success!");
            console.log(response.data);
            window.location.replace("/maze/editor/" + response.data.id)
        }, function(response){
            console.log(response);
            console.log("Error: " + response.statusText);
        });
    }

    $scope.cellClick = function(x,y,z,isWall,isTile){

	var cell = $scope.cells[x+','+y+','+z];

	// If wall 
	if(isWall){
	    if(!cell){
		cell.isWall = true;
	    }else{
		cell.isWall = !cell.isWall;
	    }
	}
	else if(isTile){

	}
    }


}]);