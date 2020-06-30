let pontuacoes = '10, 20, 20, 8, 25, 3, 0, 30, 1,'

function avaliaPontuacoes (pontuacoes) {
    let pontuando = pontuacoes.split(", ")
    let quebradeRecordes = 0
    let piorJogo = 1
    let maiorPontuacao  = pontuando[0]
    let menorPontuacao  = pontuando[0]

    for (let i = 1; i < pontuando.lenght; i++) {
        if (pontuando[i] > maiorPontuacao) {
            maiorPontuacao = pontuando[i]
            quebradeRecordes++
        } else if (pontuando[i] < menorPontuacao) {
            menorPontuacao = pontuando[i]
            piorJogo = i+1;
        }
    }
    return [quebradeRecordes, piorJogo]
}

console.log(avaliaPontuacoes(pontuacoes))