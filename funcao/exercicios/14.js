function checaFruta(fruta) {
    switch(fruta){
        case 'Maçã':
            return 'Não vendemos esta fruta aqui'
        case 'Kiwi':
            return 'Estamos com escassez de kiwis'
        case 'Melancia':
            return 'Aqui está, são 3 reais o quilo'
        default:
            return 'Oops. Error 404 :('
    }
}

console.log(checaFruta('Maçã'))
console.log(checaFruta('Kiwi'))
console.log(checaFruta('Melancia'))
console.log(checaFruta('Xuxu'))