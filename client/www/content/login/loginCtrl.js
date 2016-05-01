function loginCtrl( $scope, loginService, $location ){

	$scope.title = 'Se connecter';
	$scope.switchBtn = "Créer un compte";

	$scope.switchDisplay = function() {
		if(!$scope.switchState) {
			$scope.switchState = !$scope.switchState;
			$scope.title = "Créer un compte";
			$scope.switchBtn = "Se connecter";
		} else {
			$scope.switchState = !$scope.switchState;
			$scope.title = "Se connecter";
			$scope.switchBtn = "Créer un compte";
		}
	} // end switch function

	$scope.user = {};
	$scope.doSignUp = function() {

		loginService.create($scope.user).then(function(res){
            
            if (res.status == 200){
                $location.path('/app/parties');
			}
			//ERREUR
			else{
                alert("Oups, une erreur s'est produite!");
                $location.path('/app/login');
			}
            
         }); //end login service
	}

	$scope.doLogin = function() {

	}

} // end ctrl 