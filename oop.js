// var person = {
//   name: "yoni",
//   age: 30,
//   greeting: function () {
//     console.log("hi " + person.name);
//     console.log(this.name);
//   },
// };
// console.log(person.age);
// console.log(person.greeting());

function Student(fn, ln) {
  this.firstname = fn;
  this.lastname = ln;

  this.fullname = function () {
    return this.firstname + " " + this.lastname;
  };
}
var yonas = new Student("jo", "tesfa");
console.log(yonas.fullname()); // to print fullname method in constructor
console.log(yonas); // to print created object
