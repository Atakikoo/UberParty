function createCtrl( $scope, createService, $location ){
    
    // Date.prototype.toDateInputValue = function() {
    //     var local = new Date(this);
    //     local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
    //     return local.toJSON().slice(0,10);
    // }; //end function

    // document.getElementById('datePicker').valueAsDate = new Date();
    
    $scope.createParty = function(party){
        debugger
        $scope.party = {
            name: party.name,
            date: party.date,
            promoter: party.promoter,
            nbPlace: party.nbPlace,
            description: party.description,
            softPrice: party.softPrice,
            alcoholPrice: party.alcoholPrice,
            toEatPrice: party.toEatPrice,
            price: party.price
        };
        // data.name = $scope.name;
        // data.date = $scope.date;
        // data.promoter = $scope.promoter;
        // data.nbPlace = $scope.nbPlace;
        // data.description = $scope.description;
        // data.softPrice = $scope.softPrice;
        // data.alcoholPrice = $scope.alcoholPrice;
        // data.toEatPrice = $scope.toEatPrice;
        // data.price = $scope.price;

        console.log(party);
        
        createService.create(party).then(function(res){
            
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
