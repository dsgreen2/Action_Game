score=0;
cross=1;


audiogo=new Audio('music.mp3');
gameoveraudio=new Audio('gameover.mp3');




document.onkeydown=function(e){
    if(e.key==='ArrowUp'){
        player=document.querySelector('.player');
        player.classList.add('animateplayer');
        setTimeout(()=>{
            player.classList.remove('animateplayer');
        },700);
    }

    if(e.key==='ArrowRight'){
        player=document.querySelector('.player');
        playerx=parseInt(window.getComputedStyle(player,null).getPropertyValue('left'));
        player.style.left=playerx+112+"px";
    }

    if(e.key==='ArrowLeft'){
        player=document.querySelector('.player');
        playerx=parseInt(window.getComputedStyle(player,null).getPropertyValue('left'));
        player.style.left=(playerx-112)+"px";
    }
}


setInterval(()=>{

     player=document.querySelector('.player');
     gameover=document.querySelector('.gameover');
     obstacle=document.querySelector('.obstacle');

    px=parseInt(window.getComputedStyle(player,null).getPropertyValue('left'));
    py=parseInt(window.getComputedStyle(player,null).getPropertyValue('bottom'));

    ox=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
    oy=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('bottom'));

    offsetX=Math.abs(px-ox);
    offsetY=Math.abs(py-oy);
    console.log(offsetX);
    console.log(offsetY);
    if(offsetX<93 && offsetY<53){
        buttonel=document.querySelector('.scorecont');
        buttonel.innerHTML="Game Over";
        obstacle.classList.remove('obstacleAni');
        gameoveraudio.play();
        setTimeout(()=>{
            gameoveraudio.pause();
            audiogo.pause();
        },1000);
        setTimeout(()=>{
            restartpage();
        },3000);
        
    }
    else if(px>ox && cross==1){
        
        score+=1;
        updateScore(score);
        cross=0;
        setTimeout(()=>{
            cross=1;
        },2000);


        setTimeout(()=>{
            anidur=parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'));
            newdur=anidur-0.1;
            obstacle.style.animationDuration=newdur+'s';
        },500);

       
    }
},100);


function updateScore(score){
   scorecont=document.querySelector('.scorecont');
   scorecont.innerHTML="Your Score: "+score;
}

function updatebutton(){
    buttonel=document.querySelector('.scorecont');
    buttonel.innerHTML="Your score: 0";
    obstacle=document.querySelector('.obstacle');
    obstacle.classList.add('obstacleAni');

    

    audiogo.play();
    

}


function restartpage(){
    buttonel=document.querySelector('.scorecont');
    buttonel.innerHTML="Start Game";
    obstacle=document.querySelector('.obstacle');
    player=document.querySelector('.player');
    player.style.left="12px";

}