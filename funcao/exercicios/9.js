function classificaAluno(nota){
    let notaCorreta = arredondar(nota)
    if (notaCorreta >= 40){
        console.log(`Aprovado com nota ${notaCorreta}`)
    } else {
        console.log(`Reprovado com nota ${notaCorreta}`)
    }
}

function arredondar (nota) {
    if (nota % 5 > 2) {
        return nota + (5 - (nota % 5))
    } else {
        return nota
    }
}

classificaAluno(100)
classificaAluno(30)
classificaAluno(38)
classificaAluno(88)
classificaAluno(61)