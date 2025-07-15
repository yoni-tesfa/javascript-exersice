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

//   conditional statement

//IF

function passfail(score, pass) {
  if (score > pass) {
    console.log("student passed");
  }
  if (score < pass) {
    console.log("failed");
  }
}
passfail(70, 50);

// IF ELSE

function passfail(score, pass) {
  if (score > pass) {
    console.log("student passed");
  } else {
    console.log("failed");
  }
}
passfail(40, 50);

// TERNARY OPERATOR
function passfail(score, pass) {
  let result = score > pass ? "passed" : "failed";
  console.log(result);
}
passfail(90, 50);

// IF ELSE IF
function passfail(s, p) {
  if (s >= p) {
    console.log(" passed");
  } else if (s <= p) {
    console.log("failed");
  } else {
    console.log("incorrect number! try ");
  }
}
passfail("a", 50);

// LOOPS

// FOR LOOPS

// var sgrade = [70, 65, 89, 98, 67, 56, 89, 94];
// for (i = 0; i < sgrade.length; i++) {
//   console.log(sgrade[i]);
// }

// function print(start, end) {
//   for (i = start; i <= end; i++) {
//     console.log(i);
//   }
// }
// print(5, 10);

// // FUNCTION ARRAY FILTERING IN FOR LOOP

// function arrayfilter(array) {
//   for (i = 0; i < array.length; i++) {
//     if (array[i] > 90) {
//       console.log(array[i] + " A+");
//     }
//   }
// }
// var sgrade = [70, 65, 89, 98, 67, 56, 89, 94];
// arrayfilter(sgrade);

// // CONTINUE IN FOR LOOP

// for (i = 10; i > 0; i--) {
//   if (i == 7 || i == 4) {
//     continue;
//   }
//   console.log(i);
// }

// // BREAK IN FOR LOOP

// for (i = 0; i < 10; i++) {
//   if (i == 5) {
//     break;
//   }
//   console.log(i);
// }

// while loop

// let i = 1;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

let age;
while (true) {
  age = prompt("eneter your age");
  if (!isNaN(age) && age > 0) {
    console.log("your age is  " + age);
    break;
  }
  prompt("error!! enter correct age");
  // console.log("enter correct number");
}
