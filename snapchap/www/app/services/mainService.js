angular.module('snapchat')
.service('mainService', function($http) {


  this.getUserFriends = function(id) {
    return $http({
      method: 'GET',
      url: '/user/friends/' + id
    }).then(function(response) {
      return response.data;
    })
  }

  this.showMenu = function() {
    document.getElementById('index-html__nav-bottom').style.display = 'flex';
  };
  this.hideMenu = function() {
    document.getElementById('index-html__nav-bottom').style.display = 'none';
  };


  this.getCurrentUser = function(){
    return $http.get('/api/me').then(function(response){
      console.log('getCurrentUser data = ', response.data)

        return getCurrentUserInfo(response.data)
    })
  }
  var getCurrentUserInfo = function(userId){
    return $http.get('/api/me/'+ userId).then(function(response){
      console.log('response', response)
      currentUser = '';
      return response.data[0];
    })
  }


  this.updateFriends = function(){
      return $http.get('/user/friends/:id').then(function(friends){
        return 'friends';
      })
  }

  this.updatePendingMessages = function(){
      return $http.get('/api/getMessages/:id').then(function(pendindMessages){
          return 'pendindMessages';
      })
  }
  this.updatePendingFriendRequests = function(){
      return $http.put('').then(function(PedingFriendRequests){
        return 'PedingFriendRequests';
      })
  }

  this.replyToFriendRequest = function(){
      return $http.put('/api/changeFriendship').then(function(confirmation){
        return 'confirmation';
      })
  }

  this.sendMessage = function(){
      return $http.post('/api/uploadMessage').then(function(confirmation){
        return confirmation;
      })
  }
  this.getUsername = function(inputText){
    return $http.post('/api/searchUsers', {data: inputText}).then(function(results){
        return results;
    })
  }

  this.sendFriendRequest = function(data){
      return $http.post('/api/sendRequest', data).then(function(confirmation){
        return 'confirmation';
      })
  }

  this.detetFriend = function(){
      return $http.delete('/api/deleteFriendship').then(function(confirmation){
        return 'confirmation';
      })
  }


});
