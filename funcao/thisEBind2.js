function Pessoa() {
    this.idade = 0

    var self = this // Não recomendado, substituído por um método em arrow functions no ES6
    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}

new Pessoa