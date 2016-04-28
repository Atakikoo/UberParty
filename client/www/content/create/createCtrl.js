function createCtrl( $scope, createService, $location ){

    $scope.party= {};
    $scope.createParty = function(){
        debugger

        console.log($scope.party);
        
        createService.create($scope.party).then(function(res){
            
            if (res.status == 200){
                alert("soirée créé");
                $location.path('app/parties');
			}
			//ERREUR
			else{
                alert("ich bin hein a grosse erreur");
                $location.path('app/create');
			}
            
         }); //end create service

     } //end send function

} //end controller
