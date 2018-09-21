var box11 = document.getElementById("box11");
var box12 = document.getElementById("box12");

var box111 = document.getElementById("box1-11");
var box112 = document.getElementById("box1-12");

var box21 = document.getElementById("box21");
var box22 = document.getElementById("box22");

var box31 = document.getElementById("box3-1");
var box32 = document.getElementById("box3-2");
var box33 = document.getElementById("box3-3");
var box34 = document.getElementById("box3-4");

var bigbox   = document.getElementsByClassName("bigbox");
var bigbox1 = document.getElementsByClassName("bigbox1");
var bigbox2 = document.getElementsByClassName("bigbox2");
var bigbox3 = document.getElementsByClassName("bigbox3");

var imgs   =   bigbox[0].getElementsByTagName("div");
var img2   = bigbox2[0].getElementsByTagName("div");
var img3   = bigbox3[0].getElementsByTagName("div");

var i = 0;
var k= 0;
// one
box11.onclick = function()
{
    i++;
    if(i>9){i=0;}
    console.log(i);
    for(var j=0; j<10;j++)
    {imgs[j].style.opacity="0";}
    imgs[i].style.opacity="1";
}
box12.onclick=function()
{
    i--;
    if(i<0){i=9}
    console.log(i);
    for(var j=0;j<10;j++)
    {imgs[j].style.opacity="0";}
    imgs[i].style.opacity="1";
}
// two
box112.onclick = function()
{
    k=k+200;
    if(k>1800){k=0;}
    console.log(k);
   bigbox1[0].style.marginLeft=-k+"px";
}
box111.onclick = function()
{
    k=k-200;
    if(k<10){k=1800;}
    console.log(k);
   bigbox1[0].style.marginLeft=-k+"px";
}
// three
box31.onclick=function(){
    for(var j=0;j<img3.length;j++)
    {
    img3[j].className="box3-"+(j+1)+"";
     console.log(img3[j].className);
    img2[j].className="box2-"+(j+1)+" op2";
    console.log(img2[j].className);
    }
       box31.className="box3-5";
       img2[0].className="box2-1 op1"
       m=0; 
}
box32.onclick=function(){
    for(var j=0;j<img3.length;j++)
    {
    img3[j].className="box3-"+(j+1)+"";
     console.log(img3[j].className);
    img2[j].className="box2-"+(j+1)+" op2";
    console.log(img2[j].className);
    }
      box32.className="box3-6";
      img2[1].className="box2-2 op1"
      m=1;
}
box33.onclick=function(){
    for(var j=0;j<img3.length;j++)
    {
    img3[j].className="box3-"+(j+1)+"";
     console.log(img3[j].className);
    img2[j].className="box2-"+(j+1)+" op2";
    console.log(img2[j].className);
    }
      box33.className="box3-7";
      img2[2].className="box2-3 op1"
      m=2;
}
box34.onclick=function(){
    for(var j=0;j<img3.length;j++)
    {
    img3[j].className="box3-"+(j+1)+"";
     console.log(img3[j].className);
    img2[j].className="box2-"+(j+1)+" op2";
    console.log(img2[j].className);
    }
      box34.className="box3-8";
      img2[3].className="box2-4 op1"
      m=3;
}
m=0;
box21.onclick = function()
{
    for(var c=0; c<4;c++)
    {
        img2[c].className="box2-"+(c+1)+" op2";
        console.log(img2[c].className);
        img3[c].className="box3-"+(c+1)+"";
        console.log(img3[c].className);
    }
    m++;
    if(m>3){m=0;}
    console.log(m);
   
      img2[m].className="box2-"+(m+1)+" op1";
      console.log(img2[m].className);
      img3[m].className="box3-"+ (m+5) +"";
      console.log(img3[m].className);
}
box22.onclick = function()
{
    for(var c=0; c<4;c++)
    {
        img2[c].className="box2-"+(c+1)+" op2";
        console.log(img2[c].className);
        img3[c].className="box3-"+(c+1)+"";
        console.log(img3[c].className);
    }
    m--;
    if(m<0){m=3;}
    console.log(m);
   
      img2[m].className="box2-"+(m+1)+" op1";
      console.log(img2[m].className);
      img3[m].className="box3-"+ (m+5) +"";
      console.log(img3[m].className);
}
//four
var bigbox4 = document.getElementsByClassName("bigbox4")[0];
var bigbox5 = document.getElementsByClassName("bigbox5")[0];
var div4  = document.querySelectorAll(".bigbox4 div");
var div5 = document.querySelectorAll("bigbox5 div");

for(var z=0;z<div1.length;i++){div1[z].index = z;}

   