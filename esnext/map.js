const techs = new Map()
techs.set('react', { framework: false })
techs.set('angular', { framework: true })

console.log(techs.react) // não funciona
console.log(techs.get('react').framework)

const chavesVariadas = new Map([
    [function () { }, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número'],
])

chavesVariadas.forEach((vl, key) => {
    console.log(key, vl)
})

console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)

chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b')
chavesVariadas.set(456, 'b')
console.log(chavesVariadas)