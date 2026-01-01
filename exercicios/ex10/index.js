
setInterval(function(){
let data = new Date();
let hora = data.getHours();
let min = data.getMinutes();
let s = data.getSeconds();

document.getElementById("hr").textContent=hora
document.getElementById("min").textContent=min
document.getElementById("s").textContent=s
if(hora<10){document.getElementById("hr").textContent="0"+hora}

if(min<10){document.getElementById("min").textContent="0"+min}

if(s<10){document.getElementById("s").textContent="0"+s}
}

)