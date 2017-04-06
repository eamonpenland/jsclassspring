var teachers = ['Eamon', 'Aaron', 'Joanna'];

teachers.forEach(function(teacher, i) {
  console.log(teacher, i);
})

var students = [
  {name: 'Eamon', average: 100},
  {name: 'Jonny', average: 53},
  {name: 'Carly', average: 74}
]

var passing = students.filter(function(student) {
  return student.average >= 70;
})


var first = students.find(function(student) {
  return student.average >= 70;
})

var players = [
  {firstName: 'Matt', lastName: 'Ryan'},
  {firstName: 'Julio', lastName: 'Jones'},
  {firstName: 'Patrick', lastName: 'Demarco'}
]

var fullNames = players.map(function(player) {
  return player.firstName + ' ' + player.lastName
})

var shorter = players.map(player => {
  return player.firstName + ' ' + player.lastName
})

var shortest = players.map(p => `${p.firstName} ${p.lastName}`)



var students = [
  {name: 'Eamon', assignmentsCompleted: 5},
  {name: 'Carly', assignmentsCompleted: 10},
  {name: 'Jonny', assignmentsCompleted: 6}
]

var total = students.reduce(function(sum, student) {
  return sum + student.assignmentsCompleted
}, 0)


var newTot = students.reduce(function(acc, student) {
  return acc + student.assignmentsCompleted
}, 0)




var arg1 = function(sum, student) {
  return sum + student.assignmentsCompleted
}


var players = [
	{firstName: 'Cam', lastName: 'Newton', position: 'QB', touchdowns: 32},
	{firstName: 'Derek', lastName: 'Anderson', position: 'QB', touchdowns: 0},
	{firstName: 'Jonathan', lastName: 'Stewart', position: 'RB', touchdowns: 12},
	{firstName: 'Mike', lastName: 'Tolbert', position: 'RB', touchdowns: 8},
	{firstName: 'Fozzy', lastName: 'Whittaker', position: 'RB', touchdowns: 3},
	{firstName: 'Ted', lastName: 'Ginn', position: 'WR', touchdowns: 9},
	{firstName: 'Devin', lastName: 'Funchess', position: 'WR', touchdowns: 2}
];

var mike = players.filter(player => {
  return player.firstName === 'Mike'
})

var rb = players.filter(p => {
  return p.position === 'RB'
})

var ln = players.map(p => {
  return p.lastName
})

var tds = players.filter(p => {
  return p.touchdowns > 5 && p.position === 'RB'
}).map(p => {
  return `${p.firstName} ${p.lastName}`
})

var rbtd = players.filter(p => {
  return p.position === 'RB'
}).reduce((total, p) => {
  return total + p.touchdowns
}, 0)


const async = () => {
  setTimeout(() => {
    console.log('later')
  }, 2000);

  console.log('now')
}


getData('/my-api/data', (data) => {
  console.log('got data', data)
})


var teacher = {
  name: 'Eamon',
  speak: function() {
    setTimeout(() => {
      console.log('LATER, name' + this.name)
    }, 1000)
  }
}


var teacher = {
  name: 'Eamon',
  speak: function() {
    var self = this;
    setTimeout(() => {
      console.log('later my name is ', self.name)
    }, 1000)
  }
}


var teacher = {
  name: 'Eamon',
  speak: () => {
    var boundFunction = function(){
      console.log('later my name is ', this.name)
    }.bind(this);

    setTimeout(boundFunction, 1000);
  }
}


var students = [{stud1}, {stud2}]
var teacher = {name: 'Eamon'}

var speak = function(item1, item2){
  console.log(this.name, item1, item2)
}
speak.call(teacher, 'coffee', 'tea')
speak.apply(teacher, ['coffe', 'ramen'])

speak.apply(students, ['beer', 'soda'])



var slideshow = {
  photoList: ['birds', 'puppies', 'rainbows', 'kittens', 'babies'],
  currentPhotoIndex: 0,
  next: function() {
    if(this.currentPhotoIndex < this.photoList.length -1){
      console.log('currentPhoto is: ', this.photoList[this.currentPhotoIndex])
      this.currentPhotoIndex ++;
    }else {
      console.log('End of Slideshow!!!!')
      this.pause()
    }
  },
  prev: function() {
    if(this.currentPhotoIndex > 0){
      console.log('currentPhoto is: ', this.photoList[this.currentPhotoIndex]);
      this.currentPhotoIndex --;
    }else{
      console.log('Start of slideshow')
      this.pause()
    }
  },
  currentPhoto: function(){
    return this.photoList[this.currentPhotoIndex];
  },
  playInterval: null,
  play: function() {
    this.playInterval = setInterval(() => {
      this.next()
    }, 2000)
  },
  pause: function() {
    clearInterval(this.playInterval);
  }
}
