// function yoni(a, b) {
//   console.log(a + b);
// }
// yoni(10, 20);
// yoni(5.5, 10);

// function array(x) {
//   console.log(x);
//   console.log(x[2]);
// }
// array([1, 2, 3, 4]);

// function retrn(x, y) {
//   //   return x + y;
//   let a = x + y;
//   return a;
// }
// // console.log(retrn(10, 20));
// var b = retrn(10, 20);
// console.log(b);

// // arrow fnction expresion

// let add = () => {
//   console.log("hello yoni");
// };
// add();

// ALGORITHM PRACTICE

// var sum = function (x, y) {
//   return x + y;
// };
// console.log(sum(5, 7));

function areatri(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    // check if the data type is not number
    return "please enter correct number";
  } else if (x <= 0 || y <= 0) {
    // check if the numer -ve
    return "eneter posetive number";
  } else {
    return (x * y) / 2;
  }
}
console.log(areatri("6", 3));
console.log(areatri(-7, 4));
console.log(areatri(7, 4));
