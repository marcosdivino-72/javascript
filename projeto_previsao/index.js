const city = document.querySelector("#city")
const btn = document.querySelector("button")
const text_temp = document.querySelector(".temp")
const description = document.querySelector(".description")
const city_name = document.querySelector(".city_name")
const img_temp = document.querySelector(".img_temp")
const key = "c6235a590aba8333f10d309abb472466"



btn.addEventListener("click",async ()=> {

    const pedido = (await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&units=metric&lang=pt_br&appid=${key}`)).json()
const resposta = await pedido
console.log(resposta)


text_temp.innerHTML=resposta.main.temp+"<sup>c°</sup>"
description.textContent=resposta.weather[0].description
city_name.textContent=resposta.name
img_temp.setAttribute("src",`https://openweathermap.org/img/wn/${resposta.weather[0].icon}@2x.png`)



    
})