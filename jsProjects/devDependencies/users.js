
var Request = require('request-promise');
var _ = require('lodash');

var UsersModule = {
  getUsers: function(){
    return Request(`https://jsonplaceholder.typicode.com/users`)
    .then((users) => {
      var parsed = JSON.parse(users);
      return _.last(parsed)
    })
  }
}

module.exports = UsersModule;
