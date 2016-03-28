function loginService($http) {
  return {
    create: function(data) {
      return $http.post('http://localhost:8080/uberParty/users', data);
    },
    getAll: function() {
      return $http.get('http://localhost:8080/uberParty/users');
    },
    getOne: function(id) {
      return $http.get('http://localhost:8080/uberParty/users/' + id);
    },
    updateAllOne: function(data) {
      return $http.put('http://localhost:8080/uberParty/users/all', data);
    }
  }
}