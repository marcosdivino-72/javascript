const horas =document.querySelector("#horas")
const minutos=document.querySelector("#minutos")
const segundos=document.querySelector("#segundos")

const timeRelogia=setInterval(()=>{
const data = new Date()
const h=data.getHours()
const m=data.getMinutes()
const s=data.getSeconds()
if(h<10){
    horas.innerHTML="0"+h
}
else{
     horas.innerHTML=h
}
if(m<10){
minutos.innerHTML="0"+m
}else{
     minutos.innerHTML=m
}
if(s<10){
    segundos.innerHTML="0"+s
}else{
     segundos.innerHTML=s
}





})
