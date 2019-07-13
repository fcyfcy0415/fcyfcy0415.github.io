var superbox=document.getElementById("superbox");

var bigbox1=document.getElementById("bigbox1");//开始游戏
var bigbox2=document.getElementById("bigbox2");//游戏进行
var suspend=document.getElementById("suspend");//继续游戏
var bigbox3=document.getElementById("bigbox3");//游戏结束
var begin=document.getElementById("begin");    //继续游戏btn
var grade=document.getElementById('grade');
var gradeend=document.getElementById('final-score');



var buttons = document.getElementById("buttons");//开始游戏btn
console.log(buttons);

// var superboxClass=superboxDiv.bigbox2Style? superbox.bigbox2Style:window.getComputedStyle(superboxDiv,null);
var Sx=320; //游戏区域的宽
var Sy=560; //游戏区域的高
var gradeNumber=0; //游戏分数
var enseep = 1;      //速度
var ennumb = 20;


/* 按键引发事件------------------------------------------------------------------------------------------------------------------------------ */
//初始禁用
function disablebegin(){
    buttons.disabled=true;
}
//选择难度
function one(){
    buttons.disabled=false;
    return ennumb=20,enseep=1;
}
function two(){
    buttons.disabled=false;
    return ennumb=10,enseep=2;
}
function three(){
    buttons.disabled=false;
    return ennumb=3,enseep=3;
}
//开始游戏
function start(){
    bigbox1.style.display="none";
    bigbox2.style.display="block";
    var time=0;
  
    timeID=setInterval(function()                       //定时器设置时间间隔
    {
        if(bigbox3.style.display="none")
        {
            time++;
            if(time%this.ennumb==0){
                enemys.createNewEnemy();               //敌机生成 2s 一个
            }
            if(time%2==0){
                Bullets.newButtel();                    //子弹生成 .2s一个 
                // dideS.newDide();
            }
            enemys.moveAllEnemy();                      //敌机移动
            Bullets.moveNewButtel();                    //子弹移动
            dideS.newDide();                            
            dideS.moveDide();
        }
    },100)                                              //每.1s执行一次
}
function restart(){
    window.location.reload();                  //页面刷新
}
begin.onclick=function () {                    //开始
    suspend.style.display="none";
    start();
}
bigbox2.onclick=function(){                          
    suspend.style.display="block";
    clearTimeout(timeID);                  //终止定时器
}
/* 飞机型号--------------------------------------------------------------------------------------------------------------------------------------------  */
    var enemyPlaneS = {
        width:34,
        height:24,
        imgSrc:"../img/enemy-plane-s.png",
        boomSrc:"../img/enemy-plane-s-boom.gif",
        boomTime:50,
        hp:1,
    }//小敌机
    var enemyPlaneM = {
        width: 46,
        height: 60,
        imgSrc: '../img/enemy-plane-m.png',
        boomSrc: '../img/enemy-plane-m-boom.gif',
        boomTime: 100,
        hp: 4,                                      //血量
    };//中敌机
    var enemyPlaneL = {
        width: 110,
        height: 164,
        imgSrc: '../img/enemy-plane-l.png',
        boomSrc: '../img/enemy-plane-l-boom.gif',
        boomTime: 150,
        hp: 15,
    };//大敌机
    var ourPlane={
        width: 66,
        height: 80,
        imgSrc: '../img/our-plane.gif ',
        boomSrc: '../img/our-plane-boom.gif ',
        boomTime: 100,
        hp: 1,
    }//我方飞机

    var bulletX = {
        width: 6,
        height: 14,
        imgSrc: '../img/our-bullet.png',
    };//子弹


/* 公用函数------------------------------------------------------------------------------------------------------------------------------------------------ */                
    var plane=function(x,y,planeModel,speed)     //创建飞机的构造函数
        {
        this.sizeX=planeModel.width;             //飞机宽度                              //样式 
        this.sizeY=planeModel.height;            //飞机高度
        this.imgSrc=planeModel.imgSrc;           //飞机击毁前背景图片
        this.boomSrc=planeModel.boomSrc;         //飞机击毁后背景图片
        this.boomTime=planeModel.boomTime;       
        this.hp=planeModel.hp;                   //血量
        this.speed=speed;                        //飞行速度
        this.currentX=x;                         //横轴位置      
        this.currentY=y;                         //纵轴位置
        }
    plane.prototype.draw=function()              //画出一个飞机的方法
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
    var enemy =function(){ this.segments=[]; this.generatedCound=0;}//敌机的构造函数
    //生成画出所有新的飞机的方法 为enemys 添加名为createNewEnemy的方法
    enemy.prototype.createNewEnemy=function(){
        this.generatedCound++;
        if(this.generatedCound%17==0)                           //每17加飞机出一个打飞机
            {this.newEnemy=new plane(number(enemyPlaneL.width/2,Sx-enemyPlaneL.width/2),-32,enemyPlaneL,1*enseep)}
        else if(this.generatedCound%5==0)
            {this.newEnemy=new plane(number(enemyPlaneM.width/2,Sx-enemyPlaneM.width/2),-32,enemyPlaneM,number(2,4)*enseep)}
        else
            {this.newEnemy=new plane(number(enemyPlaneS.width/2,Sx-enemyPlaneS.width/2),-32,enemyPlaneS,number(3,5)*enseep)}
        this.segments.push(this.newEnemy);
        this.newEnemy.draw();
    }
    enemy.prototype.moveAllEnemy=function(){//敌机移动方法 为enenmys 添加
        //移除 超出 游戏区域的 飞机
        var len =this.segments.length
        for(var i=0;i<len;i++){
            this.segments[i].move();
        }
        if(len != 0){
            if(this.segments[0].currentY>600){
                bigbox2.removeChild(this.segments[0].imgNode); 
                this.segments.splice(0,1);
            }
        }
    }
    var enemys=new enemy();                                         //敌机实例化

/* 我机函数---------------------------------------------------------------------------------------------------------------------------------------- */   
    var newPlane=new plane(Sx/2,Sy-ourPlane.height/2,ourPlane,0);   //我机画出方法
    newPlane.draw();
    bigbox2.onmousemove=function(ev){                            //我机移动方法 
        newPlane.currentX=ev.clientX-superbox.offsetLeft;        //鼠标所在位置-游戏区域左偏倚数=飞机所在位置
        if(newPlane.currentX<0) {newPlane.currentX=0;}
        if(newPlane.currentX>Sx){newPlane.currentX=Sx}
        newPlane.currentY=ev.clientY-superbox.offsetTop;
        if(newPlane.currentY<0)  {newPlane.currentY=0;}
        if(newPlane.currentY>Sy){newPlane.currentY=Sy}
        newPlane.imgNode.style.left=(newPlane.currentX-newPlane.sizeX/2)+"px";
        newPlane.imgNode.style.top=(newPlane.currentY-newPlane.sizeY/2)+"px"; 
    }


/* 子弹函数-----------------------------------------------------------------------------------------------------------------------------------------------*/        
    var Bullet =function(){this.BulletX=[];}  
    var Bullets=new Bullet();   
    //生成子弹函数     
    Bullet.prototype.newButtel=function(){              
        this.newBullet=new plane(newPlane.currentX,newPlane.currentY-newPlane.sizeY/2,bulletX,-20);
        this.BulletX.push(this.newBullet);
        this.newBullet.draw();
    }
    //子弹移动函数
    Bullet.prototype.moveNewButtel=function(){
        var let = this.BulletX.length;
        for(var i=0;i<let;i++){
            this.BulletX[i].move();  
        }     
        if(let !=0 ){
            if(this.BulletX[0].currentY<-20){
                bigbox2.removeChild(this.BulletX[0].imgNode);
                this.BulletX.splice(0,1);
            }      
        }
    }
/* 碰撞检测 生成死亡数组-------------------------------------------------------------------------------------------------------------------------------------------- */      
    var  oneDide=function(){ this.dideX=[]; }
    var dideS=new oneDide(); 
    oneDide.prototype.newDide=function(){  
        console.log(grade);
        var let1 = enemys.segments.length;
        //子弹碰撞检测 
        if(let1 != 0){
            for(var i = 0; i < let1; i++){                                      //敌机遍历
                var let2 = Bullets.BulletX.length;
                for(var j = 0; j < let2; j++){               
                    var a=Math.abs(enemys.segments[i].currentX-Bullets.BulletX[j].currentX)<( enemys.segments[i].sizeX/2+Bullets.BulletX[j].sizeX/2);
                    var b=Math.abs(enemys.segments[i].currentY-Bullets.BulletX[j].currentY)<( enemys.segments[i].sizeY/2+Bullets.BulletX[j].sizeY/2);
                    var c=a && b;
                    if(c){                                                 //子弹碰撞消失
                        enemys.segments[i].hp--;
                        bigbox2.removeChild(Bullets.BulletX[j].imgNode);
                        Bullets.BulletX.splice(j,1);
                        gradeNumber+=1;
                        break;
                    }                
                }
                if( enemys.segments[i].hp == 0){
                    bigbox2.removeChild( enemys.segments[i].imgNode); 
                    enemys.segments[i].imgSrc=enemys.segments[i].boomSrc;
                    this.newDides=enemys.segments[i];
                    enemys.segments.splice(i,1);
                    this.dideX.push(this.newDides);
                    this.newDides.draw();
                    console.log(grade);
                    grade.innerHTML= gradeNumber;
                    break;
                }   
            } 
        }
        let1 = enemys.segments.length;
        //敌我撞机检测    
        for(var i=0;i < let1;i++){  
            var d=Math.abs(enemys.segments[i].currentX-newPlane.currentX)<(enemys.segments[i].sizeX/2+newPlane.sizeX/2);
            var e=Math.abs(enemys.segments[i].currentY-newPlane.currentY)<(enemys.segments[i].sizeY/2+newPlane.sizeY/2);
            var f=d && e;
            if(f){
                gradeend.innerHTML=gradeNumber;
                bigbox3.style.display="block";    
                newPlane.imgSrc=newPlane.boomSrc;
                clearInterval(timeID);
                newPlane.draw();
                for(var x = 0; x < let1; x++){
                    bigbox2.removeChild(enemys.segments[x].imgNode); 
                    enemys.segments[x].imgSrc=enemys.segments[x].boomSrc;       
                    enemys.segments[x].draw();
                }
            }    
        }    
    }
     
    oneDide.prototype.moveDide=function(){ 
        for(i=0;i<this.dideX.length;i++){
            this.dideX[i].boomTime=this.dideX[i].boomTime-10;
            this.dideX[i].move();
            if(this.dideX[i].boomTime<=0){
                bigbox2.removeChild(this.dideX[i].imgNode);
                this.dideX.splice(i,1);  
            }
        }
    }         