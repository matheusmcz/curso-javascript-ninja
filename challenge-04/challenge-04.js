// var tipo = 'Matheus'
// var isTruthy = tipo ? 'True' : 'False'
// console.log(isTruthy)

var carro = {
    marca: 'Honda',
    modelo: 'Civic',
    placa: 'MUU3344',
    ano: 2000,
    cor: 'Prata',
    quantasPortas: 4,
    assentos: 5,
    quantidadeDePessoas: 0
}

carro.mudarCor = function (color) {
    carro.cor = color
}

carro.obterCor = function () {
    return carro.cor
}

carro.obterModelo = function () {
    return carro.modelo
}

carro.obterMarca = function () {
    return carro.marca
}

carro.obterMarcaModelo = function () {
    return `Essa carro é um  ${carro.obterMarca()} ${carro.obterModelo()}`
}

carro.adicionandoPassageiros = function(pessoasEntrando){
    if(carro.quantidadeDePessoas == 5 && pessoasEntrando > 0){
        return console.log(`O carro já está lotado!`)
    }
    var assentosSobrando = carro.assentos - carro.quantidadeDePessoas

    if(assentosSobrando > 0 && pessoasEntrando > assentosSobrando){
        var pluralpessoa = assentosSobrando == 1 ? 'pessoa' : 'pessoas'
        var pluralcabe = assentosSobrando == 1 ? 'cabe' : 'cabem'
        return console.log(`Só ${pluralcabe} mais ${assentosSobrando} ${pluralpessoa}`)
    }

    carro.quantidadeDePessoas += pessoasEntrando
    

    return console.log(`Já temos ${carro.quantidadeDePessoas} dentro do carro!`)
}


































