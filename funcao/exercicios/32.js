function mediaVetor(vetorNumeros) {
    let media = 0
    for (let i = 0; i < vetorNumeros.length; i++) {
        media += vetorNumeros[i]
    }
    let mediaFinal = media / vetorNumeros.length
    return `Média: ${mediaFinal}`
}

vetor = [2, 4, 5, 7, 9, 10]

console.log(mediaVetor(vetor))