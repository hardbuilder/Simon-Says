let gameseq=[];
let userseq=[];
let btns =["red","green","blue","yello"];
let started = false;
let level = 0;
let h3 = document.querySelector("h3");
document.addEventListener("keypress", function(){
    if(started == false){
        started = true;
        
        levelup();
    }
});
const r = document.querySelector("button");
r.addEventListener("click", function(){
    if(started == false){
        started = true;

        levelup();
    }
});
if(gameseq.length!=0){
    r.innerText = "Restart";
}
function flash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },100);
}
function levelup(){
    level++;
    h3.innerText = "Level : " + level;
    let randIndex = Math.floor(Math.random()*4);
    let randColor = btns[randIndex];
    let randbtn = document.querySelector('.'+randColor);
    flash(randbtn);
    gameseq.push(randColor);
}
function checkans(idx){
    if(userseq[idx]==gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelup,1000)
            userseq=[];
        }
    }
    else{
        h3.innerText="Wrong button mate!! Game Over! press enter!"
        document.querySelector(".box_container").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector(".box_container").style.backgroundColor="";
        },200);
        reset();
    }
}
function btnpress(){
    let btn = this;
    flash(btn);
    usercolor = btn.getAttribute("id");
    userseq.push(usercolor);
    console.log(userseq);
    checkans(userseq.length-1);
}
let allbtns = document.querySelectorAll(".btn");
    for (btn of allbtns){
        btn.addEventListener("click",btnpress);
}
function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level = 0;
    r.innerText="Start";
}
