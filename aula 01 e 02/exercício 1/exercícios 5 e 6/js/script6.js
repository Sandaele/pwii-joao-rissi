/**
 * exercício 6: modelagem de trajetoria de um salto
 * autor: João Rissi
 * data da ultima alteração: 13-08-2024
 */

// 1. qual é a altura maxima alcançada pelo ginasta?
// 2. em que ponto horizontalmente essa altura maxima ocorre?

let ginasta
let alturaMaxima
let horizontalmente
let tempo

// função que calcula a trajetoria
function funcTrajetoria (a,b) {
    horizontalmente = - (b / (2 * a)) //
    alturaMaxima = -2 * a ^ 2 + 8 * a
}

// inserindo os valores e calculando
funcTrajetoria(-2, 8)