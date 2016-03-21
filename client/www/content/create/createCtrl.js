

function createController( $scope, createService, $location ){
    
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
// );