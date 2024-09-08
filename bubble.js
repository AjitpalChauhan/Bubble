var time = 60;
var score = 0;
var hitrn = 0;


function increaseScore(){
  score += 10;
  document.querySelector(".scrval").textContent = score;
}



function getHitNew(){
  hitrn = Math.floor(Math.random()*10);
  document.querySelector(".hitval").textContent = hitrn;
}



function makeBubble(){
  var clutter ="";
  for(i = 1; i <= 171; i++){
   clutter +=  `<div id="bubble">${Math.floor(Math.random() * 10)}</div>`;
  }
  document.querySelector("#gameground").innerHTML = clutter; 
}



function runTimer(){
  var clock = setInterval(function(){
   if(time>0){
    time--;
    document.querySelector(".timer").textContent= time;
   }else {
    document.querySelector("#gameground").innerHTML = `<h1>GAME OVER</h1>`;
    clearInterval(clock)
   }
    
  }, 1000)
}


document.querySelector("#gameground").addEventListener("click", function(dets){
 var clickedNum = Number(dets.target.textContent);

 if( clickedNum === hitrn){
  increaseScore();
  makeBubble();
  getHitNew();
}

})




getHitNew();
runTimer();
makeBubble();