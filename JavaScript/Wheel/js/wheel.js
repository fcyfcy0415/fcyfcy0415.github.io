var bigbox = document.getElementsByClassName("bigbox");
var box1 = document.getElementById("box1");
var box2 = document.getElementById("box2");

var z=0;
var turnbox1=function(){
    var   x=Math.floor(Math.random()*100);
    console.log(x);
    if(x<2){
        return{
            cade:1,
            txt:"一等奖"
        };
    }else if(x<5){
        return{
            cade:2,
            txt:"二等奖"
        }
    }else if(x<10){
        return{
            cade:3,
            txt:"三等奖"
        }
    }else if(x<20){
        return{
            cade:4,
            txt:"四等奖"
        }
    }else if(x<30){
        return{
            cade:5,
            txt:"五等奖"
        }
    }else if(x<50){
        return{
            cade:6,
            txt:"六等奖"
        }
    }else 
        return{
            cade:7,
            txt:"七等奖"
        }
    
}            

var turn = function()
{
    // turnbox1();
    // console.log(turnbox1()); 
    box1.style.transition="all 3s"
   var x= turnbox1();
   console.log(x);
   z=Math.floor(30+720+(360/7)*(x.cade-1));
    console.log(z);
    box1.style.transform='rotate('+ z + 'deg)';
    console.log(box1.style.transform);
    setTimeout(function(){
        box1.style.transition="all 0s"
        box1.style.transform="rotate("+ (z-720) +"deg)";
        alert(x.txt);
        canClick=true;
    },3000)
}
var canClick=true;
box2.onclick = function()
{
   if(canClick===true){turn();}
   
   canClick=false;
}