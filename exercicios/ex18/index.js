class Animal{
#cor
#tamanho

constructor(){
this.#cor="preto"
this.#tamanho=NaN

}
get GetCor(){
    return this.#cor
}
get GetTamanho(){
    return this.#tamanho
}
set SetCor(cor){
this.#cor=cor
}

dormir(){

    console.log("dormindo")
}

}

class Cachorro extends Animal{

    constructor(){
        super()
        this.orelha="para baixo"
    }
    correr(){
        console.log("Esta correndo")
    }
    rosnar(){
        console.log("Esta rosnando")
    }
}


class Passaro extends Animal{
    constructor(bico){
        super()
        this.bico=bico

    }
    voar(){
        console.log("Esta voando")
    }
}
class Papagaio extends Passaro{
    constructor(sabeFala){
    super("pequeno").
        this.sabeFala=sabeFala
            
      
    }
}


class Avestruis extends Passaro{

    constructor(){
        super()
 
 
    }
    vaor(){
        console.log("nao sabi voar")
    }
}


let obejeto ={nome: "geladeira",

              preço:1200,
	      verdiscriçao(){
		console.log(`${this.nome} por apenas ${this.preço}`)}
		}
        
      

        let Carro = function(){
            this.cor="vermelho"
            this.velocidadeAtual=0
            this.velocidadeMax=200
            this.acelerar = ()=>{
                let velocidade = this.getVelocidadeAtual()+10
                this.setVelocidadeAtual(velocidade)
            }
            this.getVelocidadeAtual = ()=> this.velocidadeAtual
            this.setVelocidadeAtual = velocidade=> this.velocidadeAtual=velocidade



        }

        carro = new Carro()

        
        carro.acelerar()
        


        let animal={attr1:"a"}
        let verterbrado={attr2:"b"} 
        let ave={ attr3:"c"}

// funçao construtora
        function obj(modelo,placa,cor,velocidadeMaxima,velocidadeAtual){

             this.modelo=modelo
             this.placa=placa,this.cor=cor
             this.velocidadeMaxima=velocidadeMaxima
             this.velocidadeAtual=velocidadeAtual
            this.acelerar= function(){
                this.velocidadeAtual+=10
             }
        }

        o = new obj("uno","lfd569","vermelho",200,0)
        o.acelerar()
        console.log(o.velocidadeAtual)


     