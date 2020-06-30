vetorInteiro = [2, 4, 5, 6, 7, 8, 9]

vetorString = ['A', 'B', 'C', 'D']

vetorDouble = [3.2, 5.4, 5.6, 7.8, 1.2]

function concatenar(...args) {
    resultado = []
    for (let i = 0; i< arguments.length; i++) {
        resultado = resultado.concat(arguments[i])
    }
    return resultado;
}

console.log(concatenar(vetorInteiro, vetorDouble))
console.log(concatenar(vetorDouble, vetorString))