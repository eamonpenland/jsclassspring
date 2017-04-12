function greetOnLoad() {
  var name = prompt('Hi! What is your name?');
  var myElement = document.getElementById('greeting')

  myElement.innerHTML = "Hello " + name + ", its nice to meet you";
}

greetOnLoad();
