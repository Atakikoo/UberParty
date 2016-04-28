function partiesCtrl($scope, partiesService) {

	partiesService.getAll().then(function(res){

		$scope.parties = res.data; 
           
		if (res.status == 200){

			  debugger

		}else{

           alert("ich bin hein a grosse erreur");
		}

	}); // end partiesService

} // end partiesCtrl