let gameseq=[];
let userseq=[];
let started=false;
let level=0;
let highestScore = 0;
let btns=["yellow","red","green","purple"];
let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
if(started==false){
    console.log("game started");
 started=true;
 levelUp();
}})

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250)
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250)
}

function levelUp(){
    userseq=[];
    level++;
    h2.innerText="level "+level;
    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randbtn=document.querySelector(`.${randColor}`);
    // console.log(randColor , randIdx, randbtn);
    gameseq.push(randColor);
    console.log(gameseq);
    btnFlash(randbtn);
}
let allBtns=document.querySelectorAll(".btn");

function checkAns(idx){
    // console.log(`current level ${level}`)
    // let idx=level-1;
    if(userseq[idx]==gameseq[idx]){
        if(userseq.length==gameseq.length){
           setTimeout(levelUp,1000);
        }
    }
    else{
        if (level > highestScore) {
            highestScore = level; // Update highest score
        }
        h2.innerHTML=`game over! Your score was <b>${level} and hisghest score is ${highestScore} <br> press any key to start`;
        let bdy=document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
        let bdy=document.querySelector("body").style.backgroundColor="white";

        },150)
        reset();
    }
}

function btnPress(){
    let btn=this;
    userFlash(btn);

     userColor=btn.getAttribute('id');
     console.log(userColor);
     userseq.push(userColor);
     checkAns(userseq.length-1);
}


for (let btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}