/*
>>> : Counter Program

>>> : This is a basic counter programmer code with the help of  html, css, javascript.

*/



const dec = document.getElementById("decreaseBtn")
const reset = document.getElementById("resetBtn")
const inc = document.getElementById("increaseBtn")
const countlable = document.getElementById("countlable")
let count = 0

inc.onclick = function(){
  if(count < 150){
    count++
    countlable.textContent = count;
  }
}
dec.onclick = function(){
if(count > -150){
  count--

  countlable.textContent = count;
}
  
 
}
reset.onclick = function(){
  count = 0
  countlable.textContent = count;
}
