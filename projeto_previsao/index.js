const city = document.querySelector("#city")
const btn = document.querySelector("button")
const key = "c6235a590aba8333f10d309abb472466"



btn.addEventListener("click",async ()=> {

    const pedido = (await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&units=metric&lang=pt_br&appid=${key}`)).json()
const resposta = await pedido
console.log(resposta)
const h = document.createElement("h1")
const h2 =document.createElement("h2")
const p = document.createElement("p")
p.textContent=resposta.weather[0].description
h.textContent=resposta.name
h2.textContent=resposta.main.temp
document.body.append(h,h2,p)

    
})