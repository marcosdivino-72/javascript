

        
        
   const l = document.querySelector("#lista")
   const b = document.querySelector("#button")
   const text = document.querySelector("#textl")
   const ul = document.querySelector("#lista")
  
   

   b.addEventListener("click", add)
 

  function add(){

   let p = document.createElement('li')
   p.addEventListener("click", marcado)
   
    function marcado(){

         

    
   }
   p.innerHTML="-"+text.value
   text.value=""

   ul.appendChild(p)
          
  p.addEventListener("dblclick", function remover(){

    p.remove(p)
   })
   p.addEventListener("click", function marca(){

    if(p.id=="marcado"){

      p.style.textDecoration="none"
      p.removeAttribute("id")
    }
    else{
        p.setAttribute("id", "marcado")
          p.style.textDecoration="line-through"
    }

    
   })


   }
 
  
   
   

        
        
        
        
        
        
