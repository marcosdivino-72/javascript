

const nome = document.querySelector("#nome");
const idade = document.querySelector("#idade");
const nota = document.querySelector("#nota");
const btn = document.querySelector("#btn");
let alunos=[]

btn.addEventListener("click", novoAluno)
function novoAluno(){
   
    let numeroDeAlunos=0
     class Aluno{
        constructor(nome,idade,nota){
            this.nome = nome
            this.idade=idade
            this.nota=nota

        }
      
        situacao(nota){
            nota=this.nota

            return nota>=7?true:false;

            

        }
    }

 alunos.push(aluno = new Aluno(nome.value,idade.value,nota.value))
 
console.log(alunos.length)
mostarAlunos(alunos)

}

function mostarAlunos(aluno){
    let alunos = [...aluno]
 const tabela = document.querySelector("#tb")
  tabela.innerHTML="";
alunos.forEach((e,i) => {
   
   let newRow = tabela.insertRow(i)
  let cell1 =  newRow.insertCell(0).innerHTML=e.nome;
  let cell2 = newRow.insertCell(1).innerHTML=e.idade;
    let p = document.createElement("p")
    let cell3= newRow.insertCell(2)
   if(e.situacao()){
 p.innerHTML="Aprovado"
p.style.color="green"
   
   cell3.appendChild(p);
  
   }
   else{
   
p.innerHTML="Reprovado"
p.style.color="red"
   
   cell3.appendChild(p);
  
   }
  // cell1.classList.add("start")
 //  cell2.classList.add("center")
 //  cell3.classList.add("end")
 

    
});

}

