vetorAdiciona = [1, 2, 3, 4, 5]

vetorPilha = [6, 7, 8, 9, 10]

function opVetor (vetor1, vetor2) {
    let resultado = vetor1.concat(vetor2)
    return resultado
}

console.log(opVetor(vetorAdiciona, vetorPilha))

