let num1 = 1
let num2 = 2

num1++
console.log(num1)
--num1
console.log(num1)

console.log(++num1 === num2--)

// Maneira antiga de Exponenciação

let exp = Math.pow(2, 3) // O primeiro valor representa a base e o segundo o expoente

console.log(exp)

// A partir do ES7

exp = 2 ** 3 // O primeiro valor representa a base e o segundo o expoente

console.log(exp)

let base = 2
base **= 3 // Eleva o valor armazenado na base à terceira potência

console.log(base)

let exp2 = 2 ** -3 // Com expoente negativo
console.log(exp2)