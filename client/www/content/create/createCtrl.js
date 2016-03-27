function createCtrl( $scope, createService, $location ){
    
    // Date.prototype.toDateInputValue = function() {
    //     var local = new Date(this);
    //     local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
    //     return local.toJSON().slice(0,10);
    // }; //end function

    // document.getElementById('datePicker').valueAsDate = new Date();
    
    $scope.createParty = function(){
        debugger

        console.log($scope.party);
        
        createService.create($scope.party).then(function(res){
            
            if (res.data){
                alert("soirée créé")
			}
			//ERREUR
			else{
                alert("ich bin hein a grosse erreur");
                $location.path('/create');
			}
            
         }); //end create service

     } //end send function

} //end controller
