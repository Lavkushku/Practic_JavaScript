document.createElement("h1");

var newElement = document.createElement("h1");

var newText = document.createTextNode("This ia just text");


var newComment =  document.createComment("This is comment");
console.log(newElement);
console.log(newText);
console.log(newComment);





// Appent Methods



var newElement = document.createElement("h3");
var newText = document.createTextNode("Hello Lavkush Singh");

var newComment =  document.createComment("I'm Shameer singh");

newElement.appendChild(newText);

//document.getElementById("text").appendChild(newElement); // Append

var target = document.getElementById("text");

target.insertBefore(newElement,target.childNodes[2]); // InsertBefor

document.getElementById("text").appendChild(newComment);

console.log(newElement);






//INSERT_ADJACENT_ELEMENT

var target = document.getElementById("text");
var newElement = "<h3> Hello I'm Lashameer singh kushvah _ _ _ _ from Morena </h3> ";
target.insertAdjacentHTML("beforeend",newElement);





// ReplaceChild & 

var newElement = document.createElement("li");
var newText  = document.createTextNode("Lavkush");

newElement.appendChild(newText);

var target = document.getElementById("li");
var oldElement = target.children[4];

target.replaceChild(newElement,oldElement);



// RemoveChild


var target = document.getElementById("li");
var oldElement = target.children[3];

target.removeChild(oldElement);




// CloneNode

var target = document.getElementById("li").children[2];
var copyElement = target.cloneNode(true);

console.log(copyElement);

document.getElementById("li2").appendChild(copyElement).children[1];


// Contains_ Find

var parentElement = document.getElementById("demo");

var target = document.getElementById("abc");
var find = parentElement.contains(target);

var Find = target.hasAttribute("class"); //has_Attribut

var Find1 = target.hasChildNodes("class"); //hasChildNodes

console.log(find);

console.log(Find); //has_Attribut

console.log(Find1); //hasChildNodes