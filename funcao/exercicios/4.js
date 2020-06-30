function divisao(dividendo, divisor) {
    let resultado = dividendo / divisor
    let resto = dividendo % divisor

    return `O resultado desta divisão é: ${resultado}, e o resto é: ${resto}`
}

console.log(divisao(748, 6))