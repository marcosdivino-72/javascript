var ditarHora = document.getElementById("hora");
var agora = new Date()
var horas = agora.getHours()
var min = agora.getMinutes()
var corpo = document.getElementById("corpo");
var img = document.getElementById("img"); 



ditarHora.innerHTML=horas+":"+min
if(horas<12 && horas>=1){
    corpo.style.backgroundColor ="#D4A50E"
    img.style.backgroundImage= "url(imagens/cafe-da-manha.jpg)";
    

}else if (horas<18 && horas >12) {
    corpo.style.backgroundColor ="#916149"
     img.style.backgroundImage= "url(imagens/paisagem-tarde.jfif)";
    
} else if (horas>=18 && horas<0) {
   
     img.style.backgroundImage= "url(imagens/images.jfif)";
      corpo.style.backgroundColor ="#4c5666ff"
    
}
    
    
