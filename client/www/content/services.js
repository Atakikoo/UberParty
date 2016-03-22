angular.module('app.services', [])
.service('createService',  function createservice($http) {
  return {
    create: function(data) {
      return $http.post('http://localhost:8080/uberParty/parties', data);
    },
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
})


.service('userService',  function userService($http) {
  return {
    post: function(data) {
      return $http.post('http://localhost:8080/uberParty/users', data);
    },
    check: function(data) {
      return $http.post('http://localhost:8080/uberParty/login', data);
    },
    getOne: function(user) {
      return $http.get('http://localhost:8080/uberParty/users/' + user);
    },
    edit: function(id, data) {  
      return $http.put('http://localhost:8080/uberParty/users/' + id, data);
    },
    get: function() {
      return $http.get('http://localhost:8080/uberParty/users');
    },
    delete: function(id) {
      return $http.delete('http://localhost:8080/uberParty/users/' + id);
    },
    logout: function($location) {
      localStorage.clear();
      $location.path('/');
    }
  }
} );