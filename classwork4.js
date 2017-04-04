var landscape = function(){
  var result = "";

  var flat = function(size) {
    for (var count = 0; count < size; count++){
      result += " _ ";
    }
  }
  var mountain = function(size) {
    result += "/";

    for (var count = 0; count < size; count ++){
      result += " '";
    }
    result += "\\";
  }

  flat(3);
  mountain(4);
  flat(6);
  mountain(1);
  flat(1);
  return result
}

console.log(landscape())

var newArr = []


newArr[index]

var newObj = {
  name: 'Eamon'
}

newObj.name;
newObj.name = 'New Name'
newObj[name] = 'New Prop';


this.state = {
  name: 'Bob',
  age: 25,
  location: 'Atl'
}

const updateProp = (whichProp, newProp) => {
  setState({
    [whichProp]: newProp
  })
}

this.updateProp('name', 'NewName');


function add() {
  var a = 'Only visible here';
}

console.log(a)





function createFunction(){
  var a = 'Inception'

  greatMovie = function () {
    console.log(a);
  };
}

var greatMovie;
createFunction()
greatMovie();




var teacher = {
  name: 'Eamon',
  sayName: function() {
    console.log(this.name);
  }
}


teacher.sayName()


function sayName() {
  console.log(this.name);
}


var teacher1 = {
  name: "Bob",
  speak: sayName
}


var teacher2 = {
  name: 'Eamon',
  speak: sayName
}


teacher1.speak();
teacher2.speak();


function add(num1, num2) {
  return num1 + num2
}

function mult(num1, num2){
  return num1 * num2
}

function doMath(operation, num1, num2){
  return operation(num1, num2)
}

var sum = doMath(add, 1, 2)
var product = doMath(mult, 3, 5)




function iLikeCoffee(item){
  return item === 'coffee';
}

function logMyThing (item, i) {
  console.log(item, i);
}

var arr = ['ramen', 'pop tarts', 'coffee'];
arr.forEach(function(blahahahahaha, jadfdl) {
  console.log(blahahahahaha, jadfdl)
})

arr.forEach(logMyThing);



superHeroes = [["Batman", "Bruce Wayne"],
               ["Spiderman", "Peter Parker"],
               ["The Flash", "Barry Allen"]];

var secretIdentity = superHeroes.map(function(reveal, i) {
  console.log('>>>>>>>>>>',reveal, i);
  return reveal.join(' is ');
})

console.log(secretIdentity.join('\n'))











var important = arr.filter(/*function(item) {return item === 'coffee'}*/ )

var reallyImportant =  arr.filter(iLikeCoffee)


arr.sort(function(a,b){
	if(a === 'coffee'){
    return -1
  }else{
    return 1
  }
})

















var superHeroes = [["Batman", "Bruce Wayne"],
                   ["Spiderman", "Peter Parker"],
                   ["The Flash", "Barry Allen"]];

var secretIdentity = superHeroes.map(function(revealArray){
  return revealArray.join(" is ");
});

console.log(secretIdentity.join("\n"));
