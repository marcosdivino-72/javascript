
const conteiner = document.querySelector("#conteiner")
const itens =document.querySelectorAll(".item")

let x=0


setInterval(()=>{
x++;
if(x>itens.length-1){
  x=0
}
conteiner.style.transform=`translateX(${x*-500}px)`
console.log(x)

},2000)
