const canvas = document.querySelector("canvas")
const cxt=canvas.getContext("2d")
cxt.fillStyle="red"
const size =30
let x =330
let y =30

 let gerarComida=false


let = direction="direita"
 const snake=[{x:30,y:100},{x:60,y:120}]

const draw=()=>{
    snake.forEach((snakePosition)=>{
        cxt.fillRect(snakePosition.x,snakePosition.y,size,size)
        

    })
    
    
} 


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

 

const moveSnake=()=>{
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

    x = Math.floor( Math.random()*20)*30
    y = Math.floor( Math.random()*20)*30
gerarComida=false
}


      cxt.fillRect(x,y,size,size)
     
}

let intv= setInterval(()=>{
let cab= snake[snake.length-1]
    cxt.clearRect(0,0,600,600)
   for(i=0;i<snake.length-1;i++){
     
    if(cab.x==snake[i].x && cab.y==snake[i].y ){
        
        clearInterval(intv)
       

       
    }
 
   }
   
    
draw()
moveSnake()
comida()

},300)  



