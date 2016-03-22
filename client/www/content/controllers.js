angular.module('app.controllers', [])
    .controller('appCtrl', function appCtrl( $scope, $ionicModal, $timeout ){
    
    
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('content/login/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };


} //end controller
)
    .controller('createCtrl',  function createController( $scope, createService, $location ){
    
    // Date.prototype.toDateInputValue = function() {
    //     var local = new Date(this);
    //     local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
    //     return local.toJSON().slice(0,10);
    // }; //end function

    // document.getElementById('datePicker').valueAsDate = new Date();

    function send(){
    var data = {};
        data.name = $scope.name;
        data.date = $scope.date;
        data.promoter = $scope.promoter;
        data.nbPlace = $scope.nbPlace;
        data.description = $scope.description;
        data.softPrice = $scope.softPrice;
        data.alcoholPrice = $scope.alcoholPrice;
        data.toEatPrice = $scope.toEatPrice;
        data.price = $scope.price;
        
        createService.create(data).then(function(res){
            
            if (!res.data){
        alert("ich bin hein a grosse erreur");
        $location.path('/create');
      }
      //ERREUR
      else{
        alert("soirée créé");
      }
            
         }); //end create service

     } //end send function

} //end controller
)

// .factory('createService',  function($http){
//   return {
//     create: function(data) {
//       return $http.post('http://localhost:8080/uberParty/parties', data);
//     },
//     getAll: function() {
//       return $http.get('http://localhost:8080/uberParty/parties');
//     },
//     getOne: function(id) {
//       return $http.get('http://localhost:8080/uberParty/parties/' + id);
//     },
//     updateAllOne: function(data) {
//       return $http.put('http://localhost:8080/uberParty/parties/all', data);
//     }
//   }
// }
// );)
    .controller('partiesCtrl',  function partiesCtrl($scope) {
  // $scope.playlists = [
    
  // ];
    })

    .controller('partyCtrl',  function partyCtrl($scope, $stateParams) {
    })

