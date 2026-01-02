
let b = document.getElementById("menu")
let div = document.getElementById("div")
b.addEventListener('click',fclick)
function fclick(){


    if(div.classList.contains('visivel')==true){

         div.setAttribute('class','oculto')
    
    }else{
         div.setAttribute('class','visivel')
         div.remove.fclick()
    }
   
}
function onmenu(){
    
    if(div.classList.contains('visivel')){

        let body = document.getElementById("body")
      let r =  body.addEventListener('mouseenter')
      alert("");
    }
}
