const canvas = document.querySelector('#canvas')
ctx = canvas.getContext("2d")

ctx.fillStyle="red"
const size =30
let direction
ctx.fillRect(0,0,50,50)
let snake=[{x:100,y:100},{x:130,y:100}]
setInterval(()=>{
    ctx.clearRect(0,0,600,600)
drawSnake()
move()


},200)

const drawSnake=()=>{

    

    snake.forEach(e=> {
        ctx.fillRect(e.x,e.y,size,size)
        
    });
}
const move=()=>{
    let  heand = snake[snake.length-1]
    if(!direction)return
    snake.shift()
        if(direction=="right"){

            snake.push({x:heand.x+size,y:heand.y})
   
   }
    if(direction=="letf"){

            snake.push({x:heand.x-size,y:heand.y})
   
   }
   if(direction=="up"){
    snake.push({x:heand.x,y:heand.y-size})
   }
   if(direction=="down"){
    snake.push({x:heand.x,y:heand.y+size})
   }


    
   
}

addEventListener("keydown",(key)=>{

    if(key.key=="w" && direction!="down"){
        direction="up"
    }
    if(key.key=="s" && direction!="up") {
        direction="down"
    }
    if(key.key=="d" && direction!="letf"){
        direction="right"
    }
    if(key.key=="a" && direction!="right"){
        direction="letf"
    }
})