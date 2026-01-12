const canvas = document.querySelector("canvas")
const score = document.querySelector("#score")
const cxt=canvas.getContext("2d")

const size =30
let x =330
let y =30
let s=0

 let gerarComida=true


let  direction
 const snake=[{x:30,y:120},{x:60,y:120}]

const draw=()=>{
    
    snake.forEach((snakePosition,i)=>{
         cxt.fillStyle="#ffd"
        if(snake[snake.length-1]==snake[i]){
             cxt.fillStyle="rgba(255, 255, 255, 1)"
        }
       
        cxt.fillRect(snakePosition.x,snakePosition.y,size,size)
        

    })
    
    
} 


   

 

const moveSnake=()=>{
    if(!direction)return
    const heand = snake[snake.length-1]
    if(heand.y==y && heand.x==x  ){
          gerarComida=true
    }else{
     
snake.shift()
    }

    if(direction=="direita"){
snake.push({x:heand.x+size,y:heand.y})
    }if(direction=="baixo"){

snake.push({x:heand.x,y:heand.y+size})
    }
    if(direction=="cima"){
        snake.push({x:heand.x,y:heand.y-size})
    }
    if(direction=="esquerda"){
        snake.push({x:heand.x-size,y:heand.y})
    }
      
  
}

const comida=()=>{
if(gerarComida==true){
    
    score.innerHTML=`SCORE:${s}`
    s+=10
    x = Math.floor( Math.random()*20)*30
    y = Math.floor( Math.random()*20)*30
    while(snake.find((position)=>position.x==x && position.y==y


    )){
         x = Math.floor( Math.random()*20)*30
    y = Math.floor( Math.random()*20)*30
    }
  
gerarComida=false
}
    cxt.shadowColor="blue"
    cxt.fillStyle="blue"
    cxt.shadowBlur=18
      cxt.fillRect(x,y,size,size)
      cxt.shadowBlur=0
     
}

const gameover=()=>{
    let cab= snake[snake.length-1]


for(i=0;i<snake.length-1;i++){
     
    if(cab.x==snake[i].x && cab.y==snake[i].y || cab.x>570 ||cab.x<0||cab.y<0 ||cab.y>570){
        const menu = document.querySelector("#menu")
        menu.style.display="block"

        clearInterval(intv)
        canvas.style.filter="blur(2px)"
       

       
    }
 
   }

}

let intv= setInterval(()=>{

    cxt.clearRect(0,0,600,600)
   
   
gameover()
draw()
moveSnake()
comida()



},300+s) 




 document.body.addEventListener("keydown",(e)=>{
      
                
              if(e.key=="w"&&direction!="baixo"){

           
            
            direction="cima"
        }
        if(e.key=="d"&&direction!="esquerda"){
          direction="direita"
        }
        if(e.key=="s"&&direction!="cima"){
          direction="baixo"
        }if(e.key=="a"&&direction!="direita"){
            direction="esquerda"
        }
    }) 









