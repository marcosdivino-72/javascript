/*Crie um novo array com o dobro de cada número em dados.

Crie um array só com os nomes dos usuários.

Crie um novo array apenas com os números maiores que 10.

Crie um novo array apenas com usuários maiores de 18.

Encontre o primeiro usuário da cidade "SP".

Encontre o índice do usuário chamado "Diana".

Verifique se o número 130 existe em dados.

Verifique se existe algum usuário menor de 16.

Verifique se todos os usuários são maiores de 14.

Some todos os números do array dados.

Conte quantas vezes cada letra aparece.

Crie um objeto no formato { nome: idade }.

Ordene dados em ordem crescente.

Junte dados com [200, 300].

Remova o número na posição 2 do array dados.

Pegue do índice 1 ao 4 sem alterar o original.*/

const dados = [5, 12, 8, 130, 44, 3];

const usuarios = [
  { id: 1, nome: "Ana", idade: 17, cidade: "SP" },
  { id: 2, nome: "Bruno", idade: 22, cidade: "RJ" },
  { id: 3, nome: "Carlos", idade: 15, cidade: "SP" },
  { id: 4, nome: "Diana", idade: 30, cidade: "MG" },
  { id: 5, nome: "Edu", idade: 19, cidade: "RJ" }
];

const letras = ["a", "b", "a", "c", "b", "a"];

//1
const dobro_dados = dados.map(e=>e*2)
//2
const nome_usuario=usuarios.map(e=>e.nome)
//3
const numero_maior_10 = dados.filter(e=>e>10)
//4
const usuario_maior_18=usuarios.filter(e=>e.idade>18)
//5
const usuario_de_sp= usuarios.find(e=>e.cidade=="SP")
//6
const indece_diana = usuarios.findIndex(e=>e.nome=="Diana")
//7
const check_numero_130 = dados.includes(130)
//8
const existe_usuario_maior_16 = usuarios.some(e=>e.idade<16)
//9
const todos_maior_14 = usuarios.every(e=>e.idade>14)
//10
const soma_numeros = dados.reduce((acc,num)=>acc+num)
//11
const conta_letra = letras.reduce((acc,l)=>{
  acc= (acc[l]||0)+1
  return acc
},{})
