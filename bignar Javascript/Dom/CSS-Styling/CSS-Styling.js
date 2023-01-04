// var kush;
// document.querySelector("#nav").style.backgroundColor = "#ed8c9c";

// document.querySelector("#nav").style.border = "3px solid red";

// document.querySelector("#peragrap").style.color = "blue";

// document.querySelector("#peragrap").style.fontSize = "20px";

// kush = document.querySelector("#nav").style.color;
// console.log(kush);



document.getElementById("peragrap").addEventListener("click",abc);


document.getElementById("peragrap").addEventListener("click", function(){
    this.style.border = "5px solid red";
})



function abc(){
    document.getElementById("peragrap").style.background = "green";
}