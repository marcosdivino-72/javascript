var fData = new Date;
var anoAtual = fData.getFullYear()
var inputano =document.getElementById("anodenascimeto");
var button = document.getElementById("verificar")

button.addEventListener("click",verificar)
var pd = document.getElementById("pS")
pd.innerHTML=anodenascimento
function verificar(){
    var anodenascimento = Number(inputano.value)
    var checkM =document.getElementById("sM")
    var checkF=document.getElementById("sF")
    var marcadaM=checkM.checked
    var marcadaF=checkF.checked

    
   var somaIdade =anoAtual-anodenascimento
   pd.innerHTML=somaIdade
  if(marcadaM==true && marcadaF==false){
    pd.innerHTML="Você e um Homen de "+somaIdade+" anos"

  }else if(marcadaF==true && marcadaM==false){
    pd.innerHTML="Você e uma Mulher de "+somaIdade+" anos"

  }else if(marcadaF==false && marcadaM==false){
    pd.innerHTML="Você tem "+somaIdade+" anos"

  }else{
    pd.innerHTML="Você tem "+somaIdade+" anos"

  }

   
}