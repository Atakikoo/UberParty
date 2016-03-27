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

} // end ctrl 