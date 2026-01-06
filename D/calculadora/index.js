
let primeironum
let tela=document.querySelector('#tela')

addEventListener("keyup", (e)=>{



let num =[Number(document.querySelector("#zero").innerHTML),Number(document.querySelector("#um").innerHTML),Number(document.querySelector("#dois").innerHTML),Number(document.querySelector("#tres").innerHTML),Number(document.querySelector("#quatro").innerHTML),Number(document.querySelector("#cinco").innerHTML),Number(document.querySelector("#seis").innerHTML),Number(document.querySelector("#sete").innerHTML),Number(document.querySelector("#oito").innerHTML),Number(document.querySelector("#nove").innerHTML)]



for (i of num){

    if(e.key==num[i]){


     document.querySelector('#tela').value+=e.key
     primeironum=true
        break
    }else{


    }



}








let caractere =["+","-","*","/","."]

if(primeironum==true){
for(i in caractere){
 if(e.key==caractere[i]){
 document.querySelector('#tela').value+=e.key
primeironum=false
break

}

}}


console.log(Number(tela.value))

addEventListener("keyup", (e)=>{
console.log( )
if(e.key=="Enter" && tela.value!=""){

     document.querySelector('#tela').value=eval(tela.value)
}


if(e.key=="Backspace"){


 document.querySelector('#tela').value=""

 
 
}


})

//let tela = document.querySelector('#tela').value+=e.key
















})
//Number(document.querySelector("#um")),Number(document.querySelector("#dois")),Number(document.querySelector("#tres")),Number(document.querySelector("quatro")),Number(document.querySelector("#cinco")),Number(document.querySelector("#seis")),Number(document.querySelector("#sete")),Number(document.querySelector("oito")),Number(document.querySelector("nove"))