var $ = require('jquery');

// var date = new Moment();
module.exports = $("#reveal").on('click', function() {
  $('#greeting').html('<h1>Hello World!</h1>');
  $(this).hide();
})

// function sayHello(){
//   var header = document.querySelector('#greeting');
//   var hello = ("<h1>Hello World</h1>");
//   header.innerHTML = hello;
// }
//
// module.exports = sayHello();
