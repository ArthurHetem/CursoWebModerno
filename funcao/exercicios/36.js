function multiplicaInteiroEVetor(inteiro, vetor) {
    let resultado = []
    for (let i = 0; i < vetor.length; i++) {
        resultado.push(vetor[i] * inteiro)
    }
    return resultado
}

function multiplicaInteiroEVetorSeMaior5(inteiro, vetor) {
    let resultado = []
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] > 5){
            resultado.push(vetor[i] * inteiro)
        }
    }
    return resultado
}

vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const inteiro = 2

console.log(multiplicaInteiroEVetor(inteiro, vetor))
console.log(multiplicaInteiroEVetorSeMaior5(inteiro, vetor))