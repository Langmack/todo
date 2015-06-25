'use strict';

/**
 * @ngdoc function
 * @name todoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the todoApp
 */
angular.module('todoApp')
  .controller('AddCtrl', function ($scope, $http, $location) {
    
  	$http.get('/todoList').success(function(response){
  		console.log("I got the data on the response");
  		$scope.tasks = response;
  	});
  

  	$scope.addTask = function(){
  		//console.log($scope.task);
  		$http.post('/addTask', $scope.task);
  		$location.path('/');

  	}

  });
