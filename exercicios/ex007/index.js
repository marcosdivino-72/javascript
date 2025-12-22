

function gerarT(){
   
     var mun = document.getElementById("num")
     var select =document.getElementById("selectT")
  
     if(mun.value.length==0){
       alert("Digite um numero")
     }else{
          var num=Number(mun.value)
          var c=0
          select.innerHTML=""
          while(c<=10){
               var intem = document.createElement("option")
              intem.text=num+"x"+c+"="+num*c
              select.appendChild(intem)
              c++

          }
     }
     
    
      
      
  
    
}