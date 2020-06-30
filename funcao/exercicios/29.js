function verificaEntre(vetorNumeros) {
    let dentroIntervalo = 0
    let foraIntervalo = 0
    for (let i = 0; i < vetorNumeros.length; i++) {
        if (vetorNumeros[i] >= 10 && vetorNumeros[i] <= 20){
            dentroIntervalo++
        } else {
            foraIntervalo++
        }
    }
    return `Dentro do Intervalo: ${dentroIntervalo}, Fora do Intervalo: ${foraIntervalo}`
}

vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]

console.log(verificaEntre(vetor))