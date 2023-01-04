
function focusFunction(element){
    element.style.background = "pink";
}

function onblurFunction(element){
    element.style.background = "";
}

function inputFunction(element){
    var x = element.value;

    console.log(x);
}



// document.getElementById("fname").addEventListener("onfocus",abc);


// document.getElementById("fname").addEventListener("onfocus", function(){
//     this.style.border = "5px solid red";
// })



// function abc(){
//     document.getElementById("fname").style.background = "green";
// }
