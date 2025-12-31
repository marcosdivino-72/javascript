



 function ativar(){
  tempo =  setInterval(function(){
cronometro= document.getElementById("h2").innerHTML
var soma = parseInt(cronometro)+1
document.getElementById("h2").innerHTML=soma


   },1000)

   


}
function parar(){

    clearInterval(tempo);
}