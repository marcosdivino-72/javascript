
const canvas = document.querySelector("canvas")

const ctx = canvas.getContext("2d")

ctx.fillStyle="blue"
const size =30;
let v = 1
let ponto_colisao_i
let ponto_colisao_f
const bola = {x:300,y:300,r:10,vx:2,vy:2}
const player ={x:220,y:500}




let direction_ball=0
let px=0
let b = false

function drawplayer(){

  ctx.fillRect(player.x,player.y,100,10)
}
function draw(){
 ctx.beginPath(); // começa o desenho
  ctx.arc(bola.x, bola.y, bola.r, 0, Math.PI * 2);
  ctx.fillStyle = "white";
  ctx.fill();
}
function colisao(){
ponto_colisao_i =player.x
ponto_colisao_f=player.x+100
if(bola.x<0||bola.x>600){
  direction_ball=direction_ball*-1
}



if(bola.y==500){

  if(bola.x>ponto_colisao_i && bola.x<ponto_colisao_f){
    v=-v
    let valor = (bola.x-player.x)/100
    direction_ball=(0.5-valor)*-1
  
  }
}

}

function moveplayer(){
  addEventListener("keydown",e=>{
    if(e.key=="a"&&e.key!="d"){
    px=-1
    console.log(px)
    b=true
    }
    if(e.key=="d"&&e.key!="a"){
     px=1
     b=true
    }
  })}  addEventListener("keyup",()=>{
px=0
  
})
function movep(){
player.x+=px
}
function move(){
if(bola.y==600){
v=-1
}
if(bola.y==0){
  v=1
}
  bola.y+=v
  bola.x+=direction_ball
  
}

setInterval(()=>{
ctx.clearRect(0,0,600,600)
move()

colisao()
movep()
drawplayer()
draw()
 
},0)
 moveplayer()