

class heroi {
    constructor(nome, idade, tipo){
        this.nome = nome ,
        this.idade =  idade,
        this.tipo = tipo  
    }
                    
    atacar(){
            let ataque = "";

           switch (this.tipo) {
                case "mago":
                    ataque = "magia";
                    break;
                case "guerreiro":
                    ataque = "espada";
                    break;
                case "monge":
                    ataque = "artes marciais";
                    break;
                case "ninja":
                    ataque = "shuriken";
                    break;
                default: ataque = "ataque básico";
            }

           console.log(`O ${this.tipo} atacou usando ${ataque} `); 
    }
  
}

let lista_herois = [
    new heroi ("Harry", 34, "mago"),
    new heroi ("Jiraya", 57, "ninja"),
    new heroi ("Aragorn", 40, "guerreiro"),
    new heroi ("jack chan", 61, "monge")
];

for (let h of lista_herois) {
    h.atacar(); 
}



