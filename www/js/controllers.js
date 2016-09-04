angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
  $('#saludar').on('click', function(){
    alert ("hola mundo");
  })
})

.controller('ChatsCtrl', function($scope, Chats, $timeout) {
 
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
 $scope.preguntas= [];
  var pregRef = new Firebase('https://tp1trivia.firebaseio.com/preguntas');

    pregRef.on('child_added', function (snapshot) {
    $timeout(function(){

    var preg = snapshot.val();
   // console.log(preg);

    $scope.preguntas.push(preg);
    console.log($scope.preguntas);  
    });
   });


  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };

  $scope.respuesta = {resp: ''};

  $scope.opciones = [];

  $("#enviar").on('click', function(){
    //console.log($('#Iturbe'));
    //  alert($('#Iturbe').val());
    alert($scope.respuesta.resp);
  });






})

.controller('ChatDetailCtrl', function($scope, $stateParams, $timeout, Chats) {
  $('#enviar').on('click', function(){
//    alert ($stateParams.chatId);
  })
  $scope.chat = Chats.get($stateParams.chatId);
//alert ($stateParams.chatId);
  $scope.preguntas= [];
  var pregRef = new Firebase('https://tp1trivia.firebaseio.com/preguntas');

    pregRef.on('child_added', function (snapshot) {
    $timeout(function(){

    var preg = snapshot.val();
   // console.log(preg);

    $scope.preguntas.push(preg);
    console.log($scope.preguntas);  
    });
   });



})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
