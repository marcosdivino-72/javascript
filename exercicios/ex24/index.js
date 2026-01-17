
let mile =document.querySelector("#milessegundos")
let s = document.querySelector("#segundos")
let min = document.querySelector("#minutos")
const h = document.querySelector("#horas")
let tempo=0




setInterval(()=>{
    tempo++;
    mile.textContent= (tempo*10)%100
   s.textContent=Math.floor((tempo/10)%60)
    min.textContent=Math.floor(((tempo/10)%3600)/60)
    h.textContent=Math.floor( (tempo/10)/3600)

},100)
