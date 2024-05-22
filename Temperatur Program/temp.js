const textb = document.getElementById("textbox");
const toFn = document.getElementById("toFahrenheit");
const toCel = document.getElementById("tocelsius");
const re = document.getElementById("result");
let temp;



function convert(){

if(toFn.checked)
  {
    temp = Number(textb.value)
    temp = temp * 9 / 5 + 32
    re.textContent = temp.toFixed(1) + "°F"
  }

  else if(toCel.checked){
    temp = Number(textb.value)
    temp = (temp - 32) * 5 / 9
    re.textContent = temp.toFixed(1) + "°C"
  }

  else{
    re.textContent = "Select a unit"
  }
  
}