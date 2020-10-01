//AULA
// var myvar = function(){
//     return 'variável myvar';
// }
// console.log(myvar())

// function objeto(nome, idade){
//     return {nome: nome, idade: idade}
// }

// let dados = objeto('Matheus', 25)
// dados.corDaPele = 'Preto'
// dados.sobrenome = 'Vieira'
// dados.nomeCompleto = function(){
//     return `${dados.nome} ${dados.sobrenome}`
// }
// dados.aniversario = function(){
//     return dados.idade ++
// }
// dados.aniversario()
// console.log(dados)

//Exercicio Challenge 03

let vazio = {}
let pessoa = {
    nome: 'Matheus',
    sobrenome: 'Vieira',
    sexo: 'Masculino',
    idade: 25,
    altura: 1.70,
    peso: 74,
    andando: false,
    caminhouQuantosMetros: 0
    
}

pessoa.fazerAniversario = function(){
    pessoa.idade ++
}
pessoa.andar = function(a){
    pessoa.caminhouQuantosMetros += a
    pessoa.andando = true
    
}
pessoa.parar = function(){
    pessoa.andando = false
}
pessoa.nomeCompleto = function(){
    return `${pessoa.nome} ${pessoa.sobrenome}`
}
pessoa.mostrarIdade = function(){
    return `${pessoa.idade}`
}
pessoa.mostrarPeso = function(){
    return `${pessoa.peso}Kg;`
}
pessoa.mostrarAltura = function(){
    return `Minha altura é de ${pessoa.altura.toFixed(2)}m;`
}
pessoa.fazerAniversario()
pessoa.fazerAniversario()
pessoa.fazerAniversario()
pessoa.andar(1)
pessoa.andar(5)
pessoa.andar(10)
pessoa.parar()
pessoa.apresentacao = function(){
  //validaçoes de sexo Masculino , idade e distancia de caminhada para alterar o plural ou singular nas frases.
    if(pessoa.sexo === 'Masculino' && pessoa.idade > 1 && pessoa.caminhouQuantosMetros >1){
        return `Olá, eu sou o ${pessoa.nomeCompleto()}, tenho ${pessoa.mostrarIdade()} anos de idade,
${pessoa.mostrarAltura()},meu peso é ${pessoa.mostrarPeso()} e,
só hoje, eu já caminhei ${pessoa.caminhouQuantosMetros} metros!`
            
    }
    if(pessoa.sexo === 'Masculino' && pessoa.idade == 1 && pessoa.caminhouQuantosMetros >1){
        return `Olá, eu sou o ${pessoa.nomeCompleto()}, tenho ${pessoa.mostrarIdade()} ano de idade,
${pessoa.mostrarAltura()},meu peso é ${pessoa.mostrarPeso()} e,
só hoje, eu já caminhei ${pessoa.caminhouQuantosMetros} metros!`
            
    }
    if(pessoa.sexo === 'Masculino' && pessoa.idade == 1 && pessoa.caminhouQuantosMetros == 1){
        return `Olá, eu sou o ${pessoa.nomeCompleto()}, tenho ${pessoa.mostrarIdade()} ano de idade,
${pessoa.mostrarAltura()},meu peso é ${pessoa.mostrarPeso()} e,
só hoje, eu já caminhei ${pessoa.caminhouQuantosMetros} metro!`
            
    }
    if(pessoa.sexo === 'Masculino' && pessoa.idade > 1 && pessoa.caminhouQuantosMetros == 1){
        return `Olá, eu sou o ${pessoa.nomeCompleto()}, tenho ${pessoa.mostrarIdade()} anos,
${pessoa.mostrarAltura()},meu peso é ${pessoa.mostrarPeso()} e,
só hoje, eu já caminhei ${pessoa.caminhouQuantosMetros} metro!`
            
    }
  //validaçoes de sexo Feminino , idade e distancia de caminhada para alterar o plural ou singular nas frases.
    if(pessoa.sexo === 'Feminino' && pessoa.idade > 1 && pessoa.caminhouQuantosMetros >1){
        return `Olá, eu sou a ${pessoa.nomeCompleto()}, tenho ${pessoa.mostrarIdade()} anos de idade,
${pessoa.mostrarAltura()},meu peso é ${pessoa.mostrarPeso()} e,
só hoje, eu já caminhei ${pessoa.caminhouQuantosMetros} metros!`
            
    }
    if(pessoa.sexo === 'Feminino' && pessoa.idade == 1 && pessoa.caminhouQuantosMetros >1){
        return `Olá, eu sou a ${pessoa.nomeCompleto()}, tenho ${pessoa.mostrarIdade()} ano de idade,
${pessoa.mostrarAltura()},meu peso é ${pessoa.mostrarPeso()} e,
só hoje, eu já caminhei ${pessoa.caminhouQuantosMetros} metros!`
            
    }
    if(pessoa.sexo === 'Feminino' && pessoa.idade == 1 && pessoa.caminhouQuantosMetros == 1){
        return `Olá, eu sou a ${pessoa.nomeCompleto()}, tenho ${pessoa.mostrarIdade()} ano de idade,
${pessoa.mostrarAltura()},meu peso é ${pessoa.mostrarPeso()} e,
só hoje, eu já caminhei ${pessoa.caminhouQuantosMetros} metro!`
            
    }
    if(pessoa.sexo === 'Feminino' && pessoa.idade > 1 && pessoa.caminhouQuantosMetros == 1){
        return `Olá, eu sou a ${pessoa.nomeCompleto()}, tenho ${pessoa.mostrarIdade()} anos,
${pessoa.mostrarAltura()},meu peso é ${pessoa.mostrarPeso()} e,
só hoje, eu já caminhei ${pessoa.caminhouQuantosMetros} metro!`
            
    }
    
}

console.log(pessoa.apresentacao())

// console.log(`${pessoa.nomeCompleto()}, 
// ${pessoa.mostrarIdade()}
// ${pessoa.mostrarPeso()}
// ${pessoa.mostrarAltura()}
// Andando? ${pessoa.andando}
// Só hoje, caminhei: ${pessoa.caminhouQuantosMetros}m
// `)

/*
nomeCompleto: Matheus Vieira
idade: 25
peso: 74kg
altura: 1.70m
aniversario: 28
*/
