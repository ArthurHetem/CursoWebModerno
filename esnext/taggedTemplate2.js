
function real(partes, ...values) {
    const resultado = []
    values.forEach((value, index) => {
        valor = isNaN(value) ? value : `R$${value.toFixed(2)}`
        resultado.push(partes[index], valor)
    })
    return resultado.join('')
}
const preco = 29.99
const precoParcela = 11
console.log(real `1x de ${preco} ou 3x de ${precoParcela}`)