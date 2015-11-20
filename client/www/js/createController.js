function connectRecruiterController($scope, createService, $location,){
    
    $scope.send = function(){
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
				alert("pseudo ou mot de passe incorrect");
				$location.path('/create');
			}
			//ERREUR
			else{
				alert("soirée crée");
			}
            
        });
