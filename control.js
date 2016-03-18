var App=angular.module("Enciende", []);
App.controller("Control1", function($scope){
          $scope.nombre = {};
          $scope.nombre2=[{}];
          $scope.darClick = function(){
            console.log('Imprimiendo JSON');
            $scope.jsonString = angular.toJson($scope.nombre, true)
            $scope.nombre2.push({mail:$scope.nombre.email}, {comen:$scope.nombre.comentario});
            console.log($scope.jsonString);
            alert("JSON Guardado!"+$scope.jsonString);           
            $scope.nombre.email = ' ';
            $scope.nombre.comentario = ' ';           
          }
        });
