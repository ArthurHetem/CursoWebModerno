function conceituaNotas(vetor) {
    let conceitos = []
    for (let i = 0; i < vetor.length; i++){
        if(vetor[i] >= 0 && vetor[i] < 5) {
            conceitos.push('D') 
        } else if (vetor[i] >= 5 && vetor[i] < 7) {
            conceitos.push('C') 
        } else if (vetor[i] >= 7 && vetor[i] < 9) {
            conceitos.push('B') 
        } else if (vetor[i] >= 9 && vetor[i] <= 10) {
            conceitos.push('A') 
        } else {
            conceitos.push('Fora do Alcance') 
        }
    }
    return conceitos
}

vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

console.log(conceituaNotas(vetor))