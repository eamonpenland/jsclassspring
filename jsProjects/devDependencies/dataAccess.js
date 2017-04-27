var Request = require('request-promise');
var Logger = require('./logger');

var DataAccess = {
  logResponse: function(res) {
    console.log(res, Logger.getTime());
    return res
  },
  getPosts: function(postId){
    return Request(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(this.logResponse)
  }
}

module.exports = DataAccess;
