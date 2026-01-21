

const btn = document.querySelector("#btn").addEventListener("click", registro)



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
  
}
bd = new Bd()
function registro(){

let items=[ano.value, mes.value,dia.value, tipo.value,descriçao.value, valor.value]
despesa = new Despesa(...items)
 
 console.log(despesa)
  if(despesa.verificar()==true){
    p.innerHTML="Despesa cadastrada com susseco!!!"
    p.style.backgroundColor="green"
    p.classList="verificaregisto"
      bd.gravar(despesa)
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
      console.log("p")
      clearTimeout(popup)

},2000)}

function carregaLista(){
    let id = parseInt (localStorage.getItem("id"))
    let lista = []
    for(let i=1; i<= id;i++){
        
        lista.push(JSON.parse(localStorage.getItem(i)))

    }
    console.log(lista)
}
carregaLista()

 




