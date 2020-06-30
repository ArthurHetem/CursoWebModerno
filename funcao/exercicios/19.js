function adicionaItem (codigo, quantidade) {
    switch(codigo) {
        case 100:
            return `${quantidade}x Cacchorro quente | Total: ${quantidade * 3}`
        case 200:
            return `${quantidade}x Hambpurguer Simples | Total: ${quantidade * 4}`
        case 300:
            return `${quantidade}x Cheeseburguer | Total: ${quantidade * 5.5}`
        case 400:
            return `${quantidade}x Bauru | Total: ${quantidade * 7.5}`
        case 500:
            return `${quantidade}x Refrigerante | Total: ${quantidade * 3.5}`
        case 600:
            return `${quantidade}x Suco | Total: ${quantidade * 2.8}`
        default:
            return 'Produto inexistente'
    }
}

console.log(adicionaItem(100, 10))
console.log(adicionaItem(200, 10))
console.log(adicionaItem(300, 10))
console.log(adicionaItem(400, 10))
console.log(adicionaItem(500, 10))
console.log(adicionaItem(600, 10))
console.log(adicionaItem(700, 10))