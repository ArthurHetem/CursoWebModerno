function hojeUtil (dia) {
    if (dia > 7){
        return 'Dia inválido'
    } else {
        switch(dia){
            case 1: case 7:
                return 'Fim de Semana'
            default:
                return 'Dia útil'
        }
    }
}

console.log(hojeUtil(3))
console.log(hojeUtil(7))
console.log(hojeUtil(8))