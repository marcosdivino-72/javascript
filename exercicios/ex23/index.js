const visor = document.querySelector("#tela")
const somar = document.querySelector("#somar")

const teclado=[document.querySelector("#t7"), document.querySelector("#t8"), document.querySelector("#t9"), document.querySelector("#t4"), document.querySelector("#t5"),document.querySelector("#t6"),document.querySelector("#t1"),document.querySelector("#t2"),document.querySelector("#t3") ,document.querySelector("#tp") ,document.querySelector("#tmais"),document.querySelector("#tmenos"),document.querySelector("#tx"), document.querySelector("#th")]


teclado.forEach((e, i)=>{
    teclado[i].addEventListener("click" ,()=>{
       
        if(visor.value=="0"){
            if(teclado[i].textContent!="."){
              visor.value=teclado[i].textContent}
              else{
                  visor.value+=teclado[i].textContent
              }
        }else{
             visor.value+=teclado[i].textContent
        }


       
    })

})
somar.addEventListener("click",calcular)
function calcular(){

visor.value=eval(visor.value);

}


