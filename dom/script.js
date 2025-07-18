// console.dir(document); // to display the whole object structure in console
// document.body.children[1].children[1].innerText = "yoni"; // make change to html by moving though its structure without changing html part

// // SELECTING SINGLE ELEMENT
// // getelemenet by id
// let sel = document.getElementById("one");
// console.log(sel.className);
// sel.className = "yellow";
// //queryselector
// console.log(document.querySelector("#one")); //select the first element only
// console.log(document.querySelector(".green"));
// console.log(document.querySelector("h1"));

// // SELECTING MULTIPLE ELEMENT
// //get element by classname = we can not loop
// let s = document.getElementsByClassName("green");
// console.log(s);
// console.log(s[0]);
// // s[1].className = "yellow";

// //get element bt tagname = we can loop
// console.log(document.getElementsByTagName("h1"));

// //query selctor all = we can loop
// console.log(document.querySelectorAll(".green"));

// // we can loop in query selector and tagname b/c it return nodelist
// var loop = document.querySelectorAll(".green");
// console.log(loop);
// for (i = 0; i < loop.length; i++) {
//   var el = loop[i];
//   el.className = "yellow";
// }

// // we can not loop in classname b/c it return htmldocumentation
// var loop = document.getElementsByClassName("green");
// console.log(loop);
// for (i = 0; i < loop.length; i++) {
//   var el = loop[i];
//   el.className = "yellow";
// }

// TRAVESRING BETWEEN MULTIPLE ELEMENT

// nextelement sibling

var tm = document.querySelector(".green");
console.log(tm);
var ne = tm.nextElementSibling;
console.log(ne);

//  previous element sibling

var tme = document.getElementById("two");
console.log(tme);
let pe = tme.previousElementSibling;
console.log(pe);
