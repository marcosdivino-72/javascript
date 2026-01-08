

const text = document.querySelector('#text')
let objetos =Array()


function additens(){

    let newitem =false;
if(text.value!=""){
if(objetos.length>0){

    for(let i in objetos){

        if(objetos[i]==text.value){

            alert("Objeto já adicionado")
            newitem= false
            break;
        }
        else{
            newitem = true


        }
    }

    if(newitem==true){
        objetos.push(text.value)
        let p = document.createElement("p")
        p.innerHTML=objetos[objetos.length-1]
        document.body.appendChild(p)
         text.value=""
    }
}else{
       objetos.push(text.value)
        let p = document.createElement("p")
        p.innerHTML=objetos[objetos.length-1]
        document.body.appendChild(p)
       text.value=""
       
}
    
}else{
 alert("Item ivalido")

}

console.log(objetos)
}
function odernar(){

objetos.sort()
console.log(objetos)
let p = document.getElementsByTagName("p")



for(i in p){

    p[i].innerHTML=i+":"+objetos[i]
}

}
