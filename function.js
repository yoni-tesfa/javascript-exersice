// function expression

const out = function () {
  console.log("function");
};
out();

// functio declaration

function sum() {
  console.log("hello yoni");
  var n1 = 10;
  var n2 = 15;
  var n3 = n1 + n2;
  console.log(n3);
  return n3;
}
sum();

// use of  return
function add() {
  var n1 = 10;
  var n2 = 15;
  var n3 = n1 + n2;
  return n3;
}
var res = add();
console.log(res);
// average use add function value by using return method
function average() {
  var av = add() / 2;
  return av;
}
console.log(average());

// input taking

function mul(x, y) {
  var z = x * y;
  console.log(z);
  // consolelog(x*y);
}
mul(5, 10);

// array taking as input
function arr(x, y) {
  console.log(x[1] * y[2]);
  console.log(x[0]);
}
arr([1, 2, 3, 4], [5, 6, 7, 8, 9]);

// scope
function scope() {
  var fvar = "i am function var";
  let flet = " i am functionlet";
  const fconst = " i am function const";
  console.log(fvar);
  console.log(flet);
  console.log(fconst);

  if (1) {
    var bvar = "block var";
    console.log(fvar);
    console.log(fconst);
  }
}
scope();
