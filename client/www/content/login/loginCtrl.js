function loginCtrl( $scope, loginService, $location ){

	$scope.title = 'Login';
	$scope.switchBtn = "Sign Up";

	$scope.switchDisplay = function() {
		if(!$scope.switchState) {
			$scope.switchState = !$scope.switchState;
			$scope.title = "Sign Up";
			$scope.switchBtn = "Login";
		} else {
			$scope.switchState = !$scope.switchState;
			$scope.title = "Login";
			$scope.switchBtn = "Sign Up";
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