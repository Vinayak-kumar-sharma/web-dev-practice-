const display =document.getElementById("display")

let timer = null;
let starttimer = 0;
let elapsedtime = 0;
let isrunning =false;


function start(){
  if(!isrunning){
    starttimer = Date.now() - elapsedtime
    timer = setInterval(update,10)
    isrunning = true
  }
}

function stop(){
  if(isrunning){
    clearInterval(timer)
    elapsedtime =Date.now() - starttimer
    isrunning = false
  }
}

function reset(){
  clearInterval(timer)
  starttimer =0;
  let elapsedtime =0;
  let isrunning = false
  display.textContent = "00:00:00:00"
}

function update(){
  const currentTime = Date.now()
  elapsedtime = currentTime - starttimer

  let hours = Math.floor(elapsedtime / (1000 * 60 * 60))
  let minutes = Math.floor(elapsedtime / (1000 * 60) % 60)
  let second = Math.floor(elapsedtime / 1000 % 60)
  let milisecond = Math.floor(elapsedtime % 1000 / 10)

  hours = String(hours).padStart(2,"0")
  minutes = String(minutes).padStart(2,"0")
  second = String(second).padStart(2,"0")
  milisecond = String(milisecond).padStart(2,"0")
  
  display.textContent = `${hours}:${minutes}:${second}:${milisecond}`
}