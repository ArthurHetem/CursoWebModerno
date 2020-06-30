function calculaJurosSimples(capital, juros, tempo){
    return (capital * juros) * tempo +  capital
}

console.log(calculaJurosSimples(100, 0.1, 2))

function calculaJurosCompostos(capital, juros, tempo){
    return capital * Math.pow(1 + juros, tempo)
}

console.log(calculaJurosCompostos(100, 0.1, 2))
