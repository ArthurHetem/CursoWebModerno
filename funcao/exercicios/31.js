function contaNegativos(vetorNumeros) {
    let negativos = 0
    for (let i = 0; i < vetorNumeros.length; i++) {
        if (vetorNumeros[i] < 0) {
            negativos++
        }
    }
    return `Neste vetor existem ${negativos} negativos`
}

vetor = [-1, 2, 3, 4, 5, -2, -3, -5, 10, 2, 0]

console.log(contaNegativos(vetor))