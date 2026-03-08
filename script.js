let display = document.getElementById("display");

function appendValue(value){
display.value += value;
}

function clearDisplay(){
display.value="";
}

function deleteLast(){
display.value = display.value.slice(0,-1);
}

function calculate(){
try{
display.value = eval(display.value);
}
catch{
display.value="Error";
}
}

/* Dark Mode Toggle */

function toggleMode(){
document.body.classList.toggle("dark");
}

/* Keyboard Support */

document.addEventListener("keydown",function(e){

if(!isNaN(e.key)){
display.value += e.key;
}

if(e.key === "+" || e.key === "-" || e.key === "*" || e.key === "/"){
display.value += e.key;
}

if(e.key === "Enter"){
calculate();
}

if(e.key === "Backspace"){
deleteLast();
}

if(e.key === "Escape"){
clearDisplay();
}

if(e.key === "."){
display.value += ".";
}

});