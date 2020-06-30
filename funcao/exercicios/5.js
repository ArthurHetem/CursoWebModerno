function formataDinheiro(valor, moeda = 'R$'){
    return `${moeda} ${valor.toFixed(2).toString().replace(".", ",")}`
}

console.log(formataDinheiro(0.1 + 0.2))