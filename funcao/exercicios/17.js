function calculaReajuste (plano, salarioAtual){
    switch(plano){
        case 'A':
            return salarioAtual + (salarioAtual * 0.1)
        case 'B':
            return salarioAtual + (salarioAtual * 0.15)
        case 'C':
            return salarioAtual + (salarioAtual * 0.2)
        default:
            return 'Plano inválido, favor consultar o RH.'
    }
}

console.log(calculaReajuste('A', 2000))
console.log(calculaReajuste('B', 2000))
console.log(calculaReajuste('C', 2000))
console.log(calculaReajuste('D', 2000))