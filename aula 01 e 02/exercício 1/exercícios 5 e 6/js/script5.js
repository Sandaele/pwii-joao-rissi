/**
 * exercício 5: comparação de desempenho entre atletas
 * autor: João Rissi
 * data da ultima alteração: 13-08-2024
 */

// 1. qual atleta atinge a maior distancia?
// 2. qual é essa distancia maxima para cada atleta?

// criando as variaveis
let AtletaA
let AtletaB
let distancia
let tempo

// função que calcula a distancia
function funcDistancia (a,b,c) {
    tempo = - (b / (2 * a))
    distancia = a * tempo ** 2 + b * tempo + c
    return distancia
}

// inserindo os valores e calculando
AtletaA = funcDistancia(-1, 6, 10) // 19 metros
AtletaB = funcDistancia(-0.5, 4, 12) // 20 metros

// comparando qual atleta atingiu a maior distancia
if (AtletaA > AtletaB) {
    console.log("o atleta A atinge a maior distancia com ", AtletaA, " metros") // 19 metros
} else if (AtletaA < AtletaB) {
    console.log("o atleta B atinge a maior distancia com ", AtletaB, " metros") // 20 metros
} else {
    console.log("a distancia dos atletas é igual") // caso os valores mudem
}
// atleta B atinge a maior distancia com 20 metros