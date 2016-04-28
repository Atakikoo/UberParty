function partiesService($http) {
  return {
    getAll: function() {
      return $http.get('http://localhost:8080/uberParty/parties');
    },
    getOne: function(id) {
      return $http.get('http://localhost:8080/uberParty/parties/' + id);
    },
    updateAllOne: function(data) {
      return $http.put('http://localhost:8080/uberParty/parties/all', data);
    }
  }
}