
if( document.querySelector("#btn")!=null){const btn = document.querySelector("#btn").addEventListener("click", registro)}

if( document.querySelector("#btnC")!=null){const btnC = document.querySelector("#btnC").addEventListener("click", pesquisaDados)}




const ano = document.querySelector("#ano")
const mes = document.querySelector("#mes")
const dia = document.querySelector("#dia")
const tipo = document.querySelector("#tipo")
const descriçao = document.querySelector("#descriçao")
const valor = document.querySelector("#valor")
let p = document.querySelector(".verificaregisto")






class Despesa{
    constructor(ano,mes,dia,tipo,descriçao,valor){
        this.ano = ano
        this.mes = mes
        this.dia = dia
        this.tipo = tipo
        this.descriçao= descriçao
        this.valor = valor}

        verificar(){
            for(let i in this)
            if(this[i]==null||this[i]==""||this[i]==undefined){
                
                return false

            }
        return true;
        }
        
      
      
    
}
class Bd{

    constructor(){
        let id = localStorage.getItem("id")
        if(id===null){
            localStorage.setItem("id",0)
        }
    }

    getProximoId(){
        let id =localStorage.getItem("id")
        let proximoid=parseInt(id)+1
        localStorage.setItem("id",proximoid)
        return proximoid
    }

    gravar(d){

        let id = this.getProximoId()
        
        localStorage.setItem(id,JSON.stringify(d))

   }
   carregalista(){

     let id = parseInt (localStorage.getItem("id"))
    let lista = []
    for(let i=1; i<= id;i++){
       
        lista.push(JSON.parse(localStorage.getItem(i)))
        
        console.log(lista)
        
        if(lista[lista.length-1]==null){
            lista.pop()
            
        }

    }
   
    return lista
   }
   pesquisa(ano , mes , dia , tipo){

  
    let lista = this.carregalista()
   const listafilter= lista.filter((e)=>{return e.ano==ano||ano==""}).filter((e)=>{return e.mes==mes|| mes==""}).filter(e=>{return e.dia==dia||dia==""}).filter(e=>{return e.tipo==tipo||tipo==""})

   carregaListaDespesa(listafilter)

  
        

  

   }
  
}
function pesquisaDados(){
bd = new Bd()
bd.pesquisa(ano.value,mes.value,dia.value,tipo.value)

}
bd = new Bd()

function registro(){

let items=[ano.value, mes.value,dia.value, tipo.value,descriçao.value, valor.value]
despesa = new Despesa(...items)
 

  if(despesa.verificar()==true){
    
    p.innerHTML="Despesa cadastrada com susseco!!!"
    p.style.backgroundColor="green"
    p.classList="verificaregisto"
      bd.gravar(despesa)
    ano.value=""
     mes.value=""
     dia.value=""
     tipo.value=""
     descriçao.value=""
     valor.value=""
      fpopup()
  }else{
 p.innerHTML="Preencha todos os campos"
    p.style.backgroundColor="red"
     p.classList="verificaregisto"
     
     fpopup()
     
  }

  
   




  

    
 
    

}
function fpopup(){
let popup =setTimeout(()=>{

      p.classList="verificaregisto pdesatifado"
  
      clearTimeout(popup)

},2000)}

function carregaListaDespesa(e){
 let lista =Array()
  var tbody = document.querySelector("#tbody_lista")
    if(e==undefined){
        
         lista=bd.carregalista()
         
    }else{
        tbody.innerHTML=""
lista=e
    }
  
  
  
   console.log(lista)
   lista.forEach((e) => {
  if(e==null){
    return
  }
  let linha= tbody.insertRow()
 linha.insertCell(0).innerHTML=`${e.dia}/${e.mes}/${e.ano}`
   linha.insertCell(1).innerHTML=e.tipo
   linha.insertCell(2).innerHTML=e.descriçao
   linha.insertCell(3).innerHTML=e.valor
   let btnr= document.createElement("button")
   btnr.innerHTML="X"
   btnr.style.background="red"
   linha.insertCell(4).appendChild(btnr)

    


    
   });


}


 




