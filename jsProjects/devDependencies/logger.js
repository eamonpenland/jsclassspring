var Moment = require('moment');

var Logger = {
  getTime: function(){
    return new Moment().format("h:mm:ss a")
  }
}

module.exports = Logger;
