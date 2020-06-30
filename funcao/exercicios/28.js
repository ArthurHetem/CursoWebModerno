numeros = [2, 4, 5, 6, 8, 9, 10, 11, 12, 13]

function parOuImpar(numeros) {
    let pares = 0
    let impares = 0
    for (let i = 0; i <= numeros.length; i++){
        if (numeros[i] % 2 == 0){
            pares++
        } else {
            impares++
        }
    }
    return `Pares: ${pares}, Ímpares: ${impares}`
}

console.log(parOuImpar(numeros))