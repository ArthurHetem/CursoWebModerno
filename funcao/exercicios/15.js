function revenda (tipo){
    switch(tipo){
        case 'Hatch':
            return 'Compra efetuada com sucesso'
        case 'Sedans': case 'Motocicletas': case 'Caminhonetes':
            return 'Tem certeza que não prefere este modelo?'
        default:
            return 'Não trabalhamos com este tipo de automóvel aqui'
    }
}

console.log(revenda('Hatch'))
console.log(revenda('Sedans'))
console.log(revenda('Motocicletas'))
console.log(revenda('Caminhonetes'))
console.log(revenda('Caminhoes'))