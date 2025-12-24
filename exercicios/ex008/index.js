
let aN=[]
 let divnum = document.getElementById("analiseNum")
  let select = document.getElementById("select")
function adicionar(){
    let textN = document.getElementById("textN")
   
    let num =Number(textN.value)
    let numT=true

  
     
   
     if(aN.length==0){
      numT=false
     }else{
        for(let c in aN){
            if(aN[c]==num){
                numT=true
              
                break;

            }
            else{
                numT=false
            }
        }

     } 
     switch(numT){

        case false:{
             if(textN.value.length!=0 && num>0 && num<=100){
        aN.push(num)
        let item=document.createElement("option")
        item.text="O numero:"+num
        select.appendChild(item)
       
          divnum.innerHTML=""
        
    }else{
        alert("Erro: Numero invalido")
        
    }



            break
        }
        case true:{
              alert("Esse numero ja tem na lista, adicione outros numeros!!")
            break
        }
     }

   
        

   
}
function analise(){
   
  if(aN.length==0){
    alert("Nenhum numero informado")
  }else{
     
     divnum.innerHTML=""
     let numCadastro = document.createElement("p")
     let maiornum=document.createElement("p")
     let menornum=document.createElement("p")
     let somanum=document.createElement("p")
     let medianum=document.createElement("p")
     let somaR=0
     let mediaR=0
     aN.sort()
     for(let c in aN){
        somaR+=aN[c]
     }

   numCadastro.innerHTML="Ao todo, temos "+aN.length+" cadastrados"
     maiornum.innerHTML="O maior valor infomado foi "+aN[aN.length-1]
     menornum.innerHTML="O menor valor infarmado foi "+aN[0]
     somanum.innerHTML="somando todos valores temos "+somaR
     medianum.innerHTML="A media dos valores digitado e "+somaR/aN.length
       
     divnum.appendChild(numCadastro)
     divnum.appendChild(maiornum)
      divnum.appendChild(menornum)
      divnum.appendChild(somanum)
       divnum.appendChild(medianum)
    


    }

}
function  limpar(){
    aN.length=0
      divnum.innerHTML=""
      select.innerHTML=""


}