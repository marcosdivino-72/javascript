let altura= 0
let largura = 0
let c =3
let time =60
let p = document.querySelector("#time")





let timeg = setInterval(()=>{
p.innerHTML="TEMPO:"+time
time--
if(time<0){
    clearInterval(timeg)
    time =0
    gameover()
}


},1000)



function posicaotela(){

largura = window.innerWidth
altura = window.innerHeight

}

posicaotela()




function redimencionado(){
    if(document.getElementById("mosca")){

let img=[document.querySelector("#c1"),document.querySelector("#c2"),document.querySelector("#c3")]


switch(c){

case 3:{
    img[2].src="imagens/coracao_vazio.png"
    c=2

    break;
}
case 2:{
 img[1].src="imagens/coracao_vazio.png"
    c=1
    break

}
case 1:{
     img[0].src="imagens/coracao_vazio.png"
    c=0
break


}
case 0:{
 clearInterval(t) 
 c=-1  
 }


}


document.getElementById("mosca").remove()


}
posicaoX= Math.floor( Math.random()*window.innerWidth) -90
posicaoY = Math.floor(   Math.random()*window.innerHeight) -90
posicaoX = posicaoX <0? 0: posicaoX
posicaoY= posicaoY <0? 0: posicaoY 

if(c>-1){
 let img =document.createElement('img')
 img.src ="imagens/mosca.png"
 img.className ="mosca"
 img.setAttribute("onclick","matar()")
 img.id="mosca"
 img.style.top = posicaoY+"px"
 img.style.left=posicaoX+"px"
 document.body.appendChild(img)

}else{

  gameover()
  
    
}
 

}


function matar (){


document.querySelector("#mosca").remove()
}
function gameover(){
  let img = document.createElement('img')
   
    let go = document.querySelector("#gameover")
       let button = document.createElement('input')
       if(time<=0){
 img.src= src="imagens/vitoria.png"
       }else{
         clearInterval(timeg)

     img.src= src="imagens/game_over.png"
       }
    go.appendChild(img)
    clearInterval(t)
    document.body.style.cursor="auto"
 
    button.setAttribute("type","button")
    button.setAttribute("value","Pagina inicial")
    button.className="b"
    button.setAttribute("onclick","window.location.href='index.html'")
    let div = document.querySelector("#gameover")
    div.appendChild(button)
    if(document.querySelector("#mosca")){

        document.querySelector('#mosca').remove()
    }

}
function vitoria(){
    
}
let t= setInterval(redimencionado,1900) 












