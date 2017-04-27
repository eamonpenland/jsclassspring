var assert = require('assert');
var Moment = require('moment');
var dataModule = require('../dataAccess.js');
var Logger = require('../logger.js');
var Users = require('../users.js');

describe('Users', function() {
  it('should return last user', function() {
    return Users.getUsers().then((user) => {
      assert.equal('Moriah.Stanton', user.username)
    })
  })
})

describe('Logger', function() {
  it('should return formatted time', function() {
    var currentTime = Logger.getTime()
    assert.equal(currentTime, new Moment().format('h:mm:ss a'))
  })
})

describe('DataModule', function() {
  it('should return some data', function() {
    return dataModule.getPosts(1).then(function(post){
      var post = JSON.parse(post);
      assert(post.userId);
      assert(post);
    });
  });
});

describe('Array', function(){
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
      assert.equal(0, [1,2,3].indexOf(1));
    })
  })
})
