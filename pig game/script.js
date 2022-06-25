"use strict";
var score,activePlayer,roundScore,gamePlaying;
init();

document.querySelector(".btn--roll").addEventListener("click",function()
{
    if(gamePlaying)
    {
        let dice=Math.floor(Math.random()*(6+1-1))+1;


document.querySelector(".dice").style.display="block";

document.querySelector(".dice").src="dice-"+dice+".png";

if(dice!==1)
{
    roundScore+=dice;
    document.querySelector("#current--"+activePlayer).textContent=roundScore;

}
else
{
nextPlayer();

}

    }
});

document.querySelector(".btn--hold").addEventListener("click",function()
{
    if(gamePlaying)
    {
score[activePlayer]+=roundScore;
document.querySelector("#score--"+activePlayer).textContent=score[activePlayer];
if(score[activePlayer]>=100)
{
    document.querySelector(".player--"+activePlayer).classList.toggle("player--winner");    
    document.querySelector("#name--"+activePlayer).textContent="WINNER!";
    document.querySelector(".dice").style.display="none";
    gamePlaying=false;

}
else
{
nextPlayer();
}
    }

});
document.querySelector(".btn--new").addEventListener("click",init);
function init()
{
score=[0,0];
activePlayer=0;
roundScore=0;
gamePlaying=true;
    document.getElementById("score--0").textContent="0";
    document.getElementById("score--1").textContent="0";
    document.getElementById("current--0").textContent="0";
    document.getElementById("current--1").textContent="0";
    document.querySelector(".dice").style.display="none";

    document.querySelector(".player--0").classList.remove("player--active");
    document.querySelector(".player--1").classList.remove("player--active");
    document.querySelector(".player--0").classList.add("player--active");
    document.querySelector(".player--0").classList.remove("player--winner");   
    document.querySelector(".player--1").classList.remove("player--winner");   
    document.querySelector("#name--0").textContent="Player 1";
    document.querySelector("#name--1").textContent="Player 2";
}

function nextPlayer()
{
    roundScore=0;
    document.querySelector(".dice").style.display="none";

    (activePlayer===0)?(activePlayer=1):(activePlayer=0);
    document.getElementById("current--0").textContent="0";
    document.getElementById("current--1").textContent="0";
    document.querySelector(".player--0").classList.toggle("player--active");
    document.querySelector(".player--1").classList.toggle("player--active");    
}
