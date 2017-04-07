function Teacher(name) {
  this.name = name;
  this.teach = function() {
    console.log(this.name + "constuctors are awesome!!!");
  }
}

var teacher1 = new Teacher('Eamon')
var teacher2 = new Teacher('Aaron')


function Particle(startX, startY) {
  this.x = startX
  this.y = startY
  this.velocity = {x: this.x, y: this.y}
}

var particles = [];

for(var i = 0; i<100; i++) {
  particles.push(new Particle(i, Math.random() * 500))
}

function Teacher(name) {
  this.name = name;
}

Teacher.prototype = {
  teach: function() {
    console.log('Prototypes are used by ', this.name)
  }
}

var teacher1 = new Teacher('Eamon')
teacher1.teach()

function Teacher() {}

Teacher.prototype = {
  disposition: 'evil'
}

var gravity = 0.5;
var time = 0;

function Particle(startX, startY){
  this.x = startX;
  this.y = startY;
}

Particle.prototype = {
  getVelocity: function(){ return time * gravity },
  move: function() {
    this.y += this.getVelocity();
    if(this.y >= 500){
      console.log('bottom');
    }
  }
}

var particles = [];

for(var i = 0; i < 10; i++){
  particles.push(new Particle(i, Math.random()*500))
}

setInterval(function() {
  while(time < 10){
    time++;
    particles.filter(function(p) {
      console.log(p);
      return p.y < 500;
    }).forEach(function(p) {
      console.log('>>>>>>>',p);
      p.move();
    })
  }
}, 100)



var lion = {
  roar: function(){ console.log('roar!!!!') }
}

var goat = {
  kick: function(){ console.log('KICKED>>>>>>>') }
}

var lizard = {
  tail: true
}

var chimera = {}

Object.assign(chimera, lion, goat, lizard)


var baseConfig = {
  appName: 'My awesome app',
  apiKey: 'mysecretkeythatnobodywillfigureout',
  apiBaseUrl: 'https://myAwesomeApp.herokuapp.com'
}

var localConfig = Object.assign({}, baseConfig, {
  apiKey: 'localPW',
  apiBaseUrl: 'https://localhost:3000/api'
})
