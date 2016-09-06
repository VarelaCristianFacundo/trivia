angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $timeout) {
  $('#login').on('click', function(){

    var username = $("#nombre").val()
    alert ("Bienvenido "+username);

    var userRef = new Firebase('https://tp1trivia.firebaseio.com/Usuarios');

    userRef.on('child_added', function (snapshot) {
    $timeout(function(){

    var user = snapshot.val();
    console.log(user);
    //$scope.preguntas.push(preg);
    //$scope.respuestas[preg.id] = preg.respuesta;

    });
   });

    
  })
})

.controller('ChatsCtrl', function($scope, Chats, $timeout) {
 
$scope.preguntas= [];
$scope.respuestas={};

  var pregRef = new Firebase('https://tp1trivia.firebaseio.com/preguntas');

    pregRef.on('child_added', function (snapshot) {
    $timeout(function(){

    var preg = snapshot.val();
   // console.log(preg);
    $scope.preguntas.push(preg);
    $scope.respuestas[preg.id] = preg.respuesta;

    });
   });

$scope.opcSelected = {};

  $("#enviar").on('click', function(){
    
    $scope.respOK = 0; //contador de respuestas OK
    $scope.respFail = 0;

        for(var respuesta in $scope.respuestas)
        {           
            if ($scope.respuestas[respuesta] === $scope.opcSelected[respuesta]){
       //         alert("Respuesta BIEN");
                $scope.respOK ++;
            }
            else{
                $scope.respFail++;
         //       alert("Respuesta MAL");   
            }
        }
  });

})



.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});


 
