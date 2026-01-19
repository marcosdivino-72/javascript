
const itens = [...document.querySelectorAll(".item")]
const btn = document.querySelector(".btn")
let c=1
  itens[0].style.transform= 'translateX(0)'
 itens[1].style.transform= 'translateX(100%)'
 itens[2].style.transform= 'translateX(200%)'

btn.addEventListener("click",()=>{

  
      if(c<=itens.length-1){

        switch(c){

            case 0:{
                 itens[0].style.transform= 'translateX(0)'
 itens[1].style.transform= 'translateX(100%)'
 itens[2].style.transform= 'translateX(200%)'
                c++
                break
            }
            case 1:{
                 itens[0].style.transform= 'translateX(-100%)'
 itens[1].style.transform= 'translateX(0%)'
 itens[2].style.transform= 'translateX(100%)'
   c++
                break
            }
            case 2:{
                 itens[0].style.transform= 'translateX(-200%)'
 itens[1].style.transform= 'translateX(-100%)'
 itens[2].style.transform= 'translateX(0%)'
   c++
                break
            }
        }


      }   else{

        itens.forEach((e)=>{
            e.setAttribute("class","item t")

        })
        c=1
         itens[0].style.transform= 'translateX(0)'
 itens[1].style.transform= 'translateX(100%)'
 itens[2].style.transform= 'translateX(200%)'
    }
 



    }
)