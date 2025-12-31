
let tempo
let data = new Date();
 let s =  data.getSeconds()

 function ativar(){
 
  tempo=setInterval(function(){
 
 let data = new Date();
 let s =  data.getSeconds()
 
document.getElementById("h2").innerHTML=s
 
  })

   


}
function parar(){

  clearInterval(tempo)
}