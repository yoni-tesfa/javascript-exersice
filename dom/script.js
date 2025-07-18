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

// // TRAVESRING BETWEEN MULTIPLE ELEMENT

// // nextelement sibling

// var tm = document.querySelector(".green");
// console.log(tm);
// var ne = tm.nextElementSibling;
// console.log(ne);

// //  previous element sibling

// var tme = document.getElementById("two");
// console.log(tme);
// let pe = tme.previousElementSibling;
// console.log(pe);

// // first elementchild

// var tf = document.getElementById("list");
// console.log(tf);
// let fe = tf.firstElementChild;
// console.log(fe);

// // last element child

// var tl = document.getElementById("list");
// console.log(tl);
// let le = tl.lastElementChild;
// console.log(le);

// // CHANGIN NODE VALUE

// // TEXT CONTENT

// var textc = document.getElementById("four");
// textc.textContent = "yoni";

// // create element

// var ce = document.createElement("h1");
// ce.textContent = "java script";
// document.getElementById("list").prepend(ce); //to display on browser at first use prepend()
// // document.body.appendChild(ce); // to display on browser at end use appendchild()

// // inner text

// var it = document.createElement("p");
// it.innerText = "hi yoni";
// document.body.prepend(it);

// // inner html

// var ih = document.createElement("p");
// ih.innerHTML = "<B>hi yoni</B>"; // to enter text as html not normal text
// document.body.prepend(ih);

// // remove child

// var parent = document.getElementById("list");
// let child = document.getElementById("two");
// parent.removeChild(child);

// //  after and before

// var re = document.getElementById("five"); // referance element
// var ce = document.createElement("h1");
// ce.textContent = "java script";
// ce.className = "red";
// re.after(ce); // to enter element after element by referancing one element
// // re.before(ce); // to enter element before element by referancing one element

// //  WORKING WITH ATTRIBUTE
// // adding ,changing and removing class name

// let ac = document.getElementById("one");
// ac.classList.add("black");
// console.log(ac);
// ac.className = "green black"; // changging class name to multiple class (2)
// ac.classList.remove("black"); // removing class name

// // changin ID

// let ci = document.getElementById("list");
// ci.id = "divlist";

// // set attribute

// var sa = document.createElement("img"); // create image element
// sa.setAttribute("src", "yo.jpg"); // in img create src attribute and give it value
// sa.setAttribute("width", "50%");
// document.body.appendChild(sa);
// // console.log(sa);

// style = used to change css part by js

let sty = document.getElementById("dom");
sty.style.backgroundColor = "blue";
sty.style.color = "white";
