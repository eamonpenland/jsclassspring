
function outer(){
  var a = {
    b: 'test',
    c: 223
  };

  var b = 'Eamon'

  console.log(a);
  console.log(b);

  function inner(a, b) {
    console.log(a, b);
    a = 'hello';
    b = 'testing';
    console.log(a, b);


  }


  inner(a, b);
  console.log(a);
  console.log(b);

}


outer();
