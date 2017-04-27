
var Request = require('request-promise');
var _ = require('lodash');

var UsersModule = {
  getUsers: function(){
    return Request(`https://jsonplaceholder.typicode.com/users`)
    .then((users) => {
      console.log(users);
      return _.last(users)
    })
  }
}

module.exports = UsersModule;
