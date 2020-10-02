// tagged tempates - processa o template dentro de  uma função
function tag(partes, ...values) {
    console.log(partes)
    console.log(values)
    return 'Outra string'
}

const aluno = 'Gui'
const situacao = 'Aprovado'
console.log(tag `${aluno} está ${situacao}`)