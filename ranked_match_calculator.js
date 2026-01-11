
function calcular_nivel(vitorias, derrotas) {
    let saldo = (vitorias - derrotas);
    let nivel = "";

        if (vitorias <= 10) {
            nivel = "Ferro";
        } else if (vitorias >= 11 && vitorias <= 20) {
            nivel = "Bronze";
        } else if (vitorias >= 21 && vitorias <= 50) {
            nivel = "Prata";
        } else if (vitorias >= 51 && vitorias <= 80) {
            nivel = "Ouro"; 
        } else if (vitorias >= 81 && vitorias <= 90) {
            nivel = "Diamante";
        } else if (vitorias >= 91 && vitorias <= 100) {
            nivel = "Lendário";
        } else {
            nivel = "Imortal";
        }

        return {saldo, nivel};
}

let lista_jogadores = [
    { vitoria: 79, derrota: 52 },
    { vitoria: 85, derrota: 40 },
    { vitoria: 45, derrota: 20 },
    { vitoria: 102, derrota: 12 },
];

for (let i = 0; i < lista_jogadores.length; i++) {
 
   let resultado = calcular_nivel(lista_jogadores[i].vitoria, lista_jogadores[i].derrota);

    console.log(`O Herói tem o saldo de ${resultado.saldo}, está no nível de ${resultado.nivel}`); 
}

