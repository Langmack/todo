'use strict';

/**
 * @ngdoc function
 * @name todoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the todoApp
 */
angular.module('todoApp')
  .controller('TasksCtrl', function ($scope, $http, $location, $resource) {

  	var refresh = function(){
  	$http.get('/todoList').success(function(response){
  		console.log("I got the data on the response");
  		$scope.tasks = response;
  	});
  	};

  	refresh();

  	$scope.deleteTask = function(id){
  		$http.delete('/todoList'+id);
  		refresh();
  	}

});