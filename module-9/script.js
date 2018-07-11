
let timeWatch=document.querySelector('.js-time');
let startBtn=document.querySelector('.js-start');
let stopBtn=document.querySelector('.js-take-pause');
let continBtn=document.querySelector('.js-take-continue');
let resetBtn=document.querySelector('.js-reset');
let lapBtn=document.querySelector('.js-lap');
let lapContainer = document.querySelector('.js-laps');

function displayStopButton() {
  startBtn.style.display = 'none';
  stopBtn.style.display = 'block';
  continBtn.style.display = 'none';
}
  
function displayContButt(){
  continBtn.style.display = 'block';
  stopBtn.style.display = 'none';
}

function disabledButt(){
  resetBtn.setAttribute('disabled','true');
}

function ableButt(){
  resetBtn.removeAttribute('disabled');
}

let startTime = Date.now();
let stopTime = 0;
let continueTime = 0;
let diff = 0;
let timerId = null;
let isActive = false;
let value = 0;
stopBtn.style.display = 'none';
continBtn.style.display='none';

function timer(){
  let nowTime = Date.now();
  diff = nowTime-startTime+continueTime;
  let mil = diff;
  let sec = Math.floor(mil/1000);
  let min = Math.floor(sec/60);
  let hour = Math.floor(min/60);
  let day = Math.floor(hour/24);
  mil = Number.parseInt((mil%1000)/100);
  sec = sec%60;
  min = min%60;
  hour = hour%24;
  value = `${day}:${hour}:${min}:${sec}:${mil}`;
  timeWatch.textContent = value;
  return `${day}:${hour}:${min}:${sec}:${mil}`;
}

function  start(){
  if(!isActive){
    timerId = setInterval(()=>{
        timer();
    },100)
  }
  isActive=true;
}

function stop(){
  if(isActive){
    clearInterval(timerId);
    timerId = null;
  }
  stopTime = Date.now();
  isActive = false;
}

function cont(){
  continueTime = Date.now()-stopTime;
  start();
}

function reset(){
  startTime=Date.now();
  continueTime=0;
  stop();
  timeWatch.textContent=`${00}:${00}:${00}:${00}:${00}`;
  startBtn.style.display = 'block';
  stopBtn.style.display = 'none';
  continBtn.style.display='none';
  lapContainer.innerHTML=' ';
}

function lap() {
  if(isActive) {
    let li=document.createElement('li');
    li.textContent=`${timeWatch.textContent}`;
    lapContainer.appendChild(li);
  }
}

startBtn.addEventListener('click', start);
startBtn.addEventListener('click',displayStopButton);
startBtn.addEventListener('click',ableButt);
stopBtn.addEventListener('click', stop);
stopBtn.addEventListener('click', displayContButt);
continBtn.addEventListener('click', cont);
continBtn.addEventListener('click', displayStopButton);
resetBtn.addEventListener('click',reset);
resetBtn.addEventListener('click',disabledButt);
lapBtn.addEventListener('click',lap);
