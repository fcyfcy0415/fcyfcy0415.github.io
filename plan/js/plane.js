var superbox=document.getElementById("superbox");

var bigbox1=document.getElementById("bigbox1");
var bigbox2=document.getElementById("bigbox2");
var bigbox3=document.getElementById("bigbox3");
var suspend=document.getElementById("suspend");
var begin=document.getElementById("begin");

var buttonS =document.getElementById("bottonS");

// var superboxClass=superboxDiv.bigbox2Style? superbox.bigbox2Style:window.getComputedStyle(superboxDiv,null);
var Sx=320;
var Sy=560;
/* 按键引发事件------------------------------------------------------------------------------------------------------------------------------ */
function start(){
   bigbox1.style.display="none";
   bigbox2.style.display="block";
   console.log(bigbox2.style.display);
   var time=0;
  
  
    timeID=setInterval(function()
    {
        if(bigbox3.style.display="none")
        {
            time++;
            if(time%20===0){
                enemys.createNewEnemy();
            }
            if(time%2===0){
                Bullets.newButtel();  
                // dideS.newDide();
            }
            enemys.moveAllEnemy();
            Bullets.moveNewButtel();
            dideS.newDide();
            dideS.moveDide();
        }
    },100)
}
function restart(){
        window.location.reload();
        bigbox1.style.display="block";
        bigbox2.style.display="none";
        bigbox3.style.display="none";
        suspend.style.display="none";
}
begin.onclick=function () 
    {
        suspend.style.display="none";
        start();
}
bigbox2.onclick=function(){
        suspend.style.display="block";
        clearTimeout(timeID);
}
/* 飞机型号--------------------------------------------------------------------------------------------------------------------------------------------  */
    var enemyPlaneS=
        {
            width:34,
            height:24,
            imgSrc:"../img/enemy-plane-s.png",
            boomSrc:"../img/enemy-plane-s-boom.gif",
            boomTime:50,
            hp:1,
        }
    var enemyPlaneM = {
            width: 46,
            height: 60,
            imgSrc: '../img/enemy-plane-m.png',
            boomSrc: '../img/enemy-plane-m-boom.gif',
            boomTime: 100,
            hp: 5,                                      //血量
        };
    var enemyPlaneL = {
            width: 110,
            height: 164,
            imgSrc: '../img/enemy-plane-l.png',
            boomSrc: '../img/enemy-plane-l-boom.gif',
            boomTime: 150,
            hp: 15,
        };
     var ourPlane={
            width: 66,
            height: 80,
            imgSrc: '../img/our-plane.gif ',
            boomSrc: '../img/our-plane-boom.gif ',
            boomTime: 100,
            hp: 1,
    }
    var bulletX = {
            width: 6,
            height: 14,
            imgSrc: '../img/our-bullet.png',
        };


/* 公用函数------------------------------------------------------------------------------------------------------------------------------------------------ */                
    var plane=function(x,y,planeModel,speed)     //创建飞机的构造函数
        {
        this.sizeX=planeModel.width;                                  //样式 
        this.sizeY=planeModel.height;
        this.imgSrc=planeModel.imgSrc;
        this.boomSrc=planeModel.boomSrc;
        this.boomTime=planeModel.boomTime;
        this.hp=planeModel.hp;
        this.speed=speed; 
        this.x=x;                                                                 //定位
        this.y=y;
        this.currentX=this.x;                                 
        this.currentY=this.y;
        }
    plane.prototype.draw=function()                      //画出一个飞机的方法
        {
            this.imgNode=new Image();
            this.imgNode.src=this.imgSrc;
            this.imgNode.style.left= (this.currentX-this.sizeX/2)+"px";
            this.imgNode.style.top=(this.currentY-this.sizeY/2)+"px";
            bigbox2.appendChild(this.imgNode);
        }
    plane.prototype.move=function()                      //某个飞机的移动方法
        {
            this.currentY+=this.speed;
            this.imgNode.style.top=this.currentY+"px";
        }
    var number=function(min,max)                         //随机数生成方法
        { return Math.round(Math.random()*(max-min))+min; }


/* 敌机函数---------------------------------------------------------------------------------------------------------------------------------- */        
    var enemy =function()                                           //敌机的构造函数
        { this.segments=[]; this.generatedCound=0;}
    var enemys=new enemy();                                         //敌机实例化
    enemy.prototype.createNewEnemy=function()                       //生成画出所有新的飞机的方法
        {
            this.generatedCound++;
            if(this.generatedCound%17===0)
            {this.newEnemy=new plane(number(enemyPlaneL.width/2,Sx-enemyPlaneL.width/2),-32,enemyPlaneL,1)}
            else if(this.generatedCound%5===0)
            {this.newEnemy=new plane(number(enemyPlaneM.width/2,Sx-enemyPlaneM.width/2),-32,enemyPlaneM,number(2,4))}
            else
            {this.newEnemy=new plane(number(enemyPlaneS.width/2,Sx-enemyPlaneS.width/2),-32,enemyPlaneS,number(3,5))}
            this.segments.push(this.newEnemy);
            // console.log(this.segments);
            this.newEnemy.draw();
        }
    enemy.prototype.moveAllEnemy=function()                         //敌机移动方法
        {
            for(var i=0;i<this.segments.length;i++)
            {
                this.segments[i].move();
                // console.log(Bullets.BulletX.length);
                if(this.segments[i].currentY>600)
                {bigbox2.removeChild(this.segments[i].imgNode); this.segments.splice(i,1);}
            }
        }


/* 我机函数---------------------------------------------------------------------------------------------------------------------------------------- */   
    var newPlane=new plane(Sx/2,Sy-ourPlane.height/2,ourPlane,0);   //我机画出方法
    newPlane.draw();
    bigbox2.onmousemove=function(ev)                                //我机移动方法 
        {
        newPlane.currentX=ev.clientX-superbox.offsetLeft;
            if(newPlane.currentX<0)  {newPlane.currentX=0;}
            if(newPlane.currentX>Sx){newPlane.currentX=Sx}
        newPlane.currentY=ev.clientY-superbox.offsetTop;
            if(newPlane.currentY<0)  {newPlane.currentY=0;}
            if(newPlane.currentY>Sy){newPlane.currentY=Sy}
        newPlane.currentX=newPlane.currentX;
        newPlane.currentY=newPlane.currentY;
        newPlane.imgNode.style.left=(newPlane.currentX-newPlane.sizeX/2)+"px";
        newPlane.imgNode.style.top=(newPlane.currentY-newPlane.sizeY/2)+"px"; 
        }


/* 子弹函数-----------------------------------------------------------------------------------------------------------------------------------------------*/        
    var Bullet =function()                                          
        {this.BulletX=[];}
    console.log(Bullet);    
    var Bullets=new Bullet();        
    Bullet.prototype.newButtel=function()
        {
        this.newBullet=new plane(newPlane.currentX,newPlane.currentY-newPlane.sizeY/2,bulletX,-20);
        this.BulletX.push(this.newBullet);
        // console.log(this.BulletX);
        this.newBullet.draw();
        }

    Bullet.prototype.moveNewButtel=function()
        {
        for(var i=0;i<this.BulletX.length;i++)
            {this.BulletX[i].move();
                if(this.BulletX[i].currentY<-10)
                {
                    bigbox2.removeChild(this.BulletX[i].imgNode);
                    this.BulletX.splice(i,1);
                }        
            }     
        }
/* 碰撞检测 生成死亡数组-------------------------------------------------------------------------------------------------------------------------------------------- */      
  var  oneDide=function()
  { this.dideX=[]; }
   var dideS=new oneDide();     
   oneDide.prototype.newDide=function()
   {  
      
        for(var i=0;i<enemys.segments.length;i++)                                   //敌机遍历
        {
            for(var j=0;j<Bullets.BulletX.length;j++)                               //子弹遍历
                {                                                                   //子弹碰撞检测 
                    console.log(enemys.segments[i].currentX);
                    console.log(Bullets.BulletX[j].currentX);
                    console.log(enemys.segments[i]);
                    console.log(Bullets.BulletX[j]);
                    var a=Math.abs(enemys.segments[i].currentX-Bullets.BulletX[j].currentX)<( enemys.segments[i].sizeX/2+Bullets.BulletX[j].sizeX/2);
                    var b=Math.abs( enemys.segments[i].currentY-Bullets.BulletX[j].currentY)<( enemys.segments[i].sizeY/2+Bullets.BulletX[j].sizeY/2);
                    var c=a && b;
                    console.log(enemys.segments[i].currentX);
                    console.log(Bullets.BulletX[j].currentX);
                    console.log(enemys.segments[i]);
                    console.log(Bullets.BulletX[j]);
                    if(c)
                    {
                        // console.log(c);
                        enemys.segments[i].hp--;
                        bigbox2.removeChild(Bullets.BulletX[j].imgNode);
                        Bullets.BulletX.splice(j,1);
                    }
                    if( enemys.segments[i].hp===0)
                    {
                        bigbox2.removeChild( enemys.segments[i].imgNode); 
                       enemys.segments[i].imgSrc=enemys.segments[i].boomSrc;
                       this.newDides=enemys.segments[i];
                       this.dideX.push(this.newDides);
                       this.newDides.draw();
                       console.log(this.dideX)
                       enemys.segments.splice(i,1);
                    }
                }   
        } 
        for(var i=0;i<enemys.segments.length;i++)  //敌我撞机检测    
        {
            var d=Math.abs(enemys.segments[i].currentX-newPlane.currentX)<(enemys.segments[i].sizeX/2+newPlane.sizeX/2);
            var e=Math.abs(enemys.segments[i].currentY-newPlane.currentY)<(enemys.segments[i].sizeY/2+newPlane.sizeY/2);
            var f=d && e;
            if(f)
                {
                  bigbox3.style.display="block";    
                  newPlane.imgSrc=newPlane.boomSrc;
                  clearInterval(timeID);
                  newPlane.draw();
                  for(var x=0;x< enemys.segments.length;x++)
                    {
                        bigbox2.removeChild(enemys.segments[x].imgNode); 
                        enemys.segments[x].imgSrc=enemys.segments[x].boomSrc;       
                        enemys.segments[x].draw();
                    }
                }    
        }
    }  
    oneDide.prototype.moveDide=function()
    { 
        for(i=0;i<this.dideX.length;i++)
        {
            this.dideX[i].boomTime=this.dideX[i].boomTime-10;
            this.dideX[i].move();
            if(this.dideX[i].boomTime<=0)
            {
                console.log(this.dideX);
                bigbox2.removeChild(this.dideX[i].imgNode);
                this.dideX.splice(i,1);  
            }
        }
    }         