// Declaração de variáveis

/*
let nota_1, nota_2, nota_3, status

nota_1 = Number(prompt('Digite a primeira nota:'))
nota_2 = Number(prompt('Digite a segunda nota:'))
nota_3 = Number(prompt('Digite a terceira nota:'))

// Processamento dos dados
let soma = nota_1 + nota_2 + nota_3
let media = soma / 3

if (media >= 7) {
    status_ = 'APROVADO'
} else if (media >= 5 && media < 7){
    status_ = 'EM RECUPERAÇÃO'
} else {
    status_ = 'REPROVADO'
}

document.writeln(`A MÉDIA  das notas ${nota_1}, ${nota_2} e ${nota_3} é igual a: ${media}. Você está ${status_}.`)
*/

/*
let numero_1, numero_2, numero_3, mensagem

numero_1 = Number(prompt('Digite um número:'))
numero_2 = Number(prompt('Digite outro número:'))
numero_3 = Number(prompt('Digite o último número:'))

mensagem = ''

if (numero_1 > numero_2 && numero_1 > numero_3) {
    mensagem = `"${numero_1}" é o maior.`
} else if (numero_2 > numero_3) {
    mensagem = `"${numero_2}" é o maior.`
} else{
    mensagem = `"${numero_3}" é o maior.`
}

document.write(`Entre ${numero_1}, ${numero_2} e ${numero_3}, ${mensagem}.`)
*/

/*
let opcao, mes

opcao = Number(prompt('Digite o número de um mês!'))

switch (opcao) {
    case 1:
        mes = 'janeiro'
        break;
    case 2:
        mes = 'fevereiro'
        break;
    case 3:
        mes = 'março'
        break;
    case 4:
        mes = 'abril'
        break;
    default:
        mes = 'mês inváido!'
        break; 
}

document.write(`Mês selecionado: ${mes}.`)
*/

let numero = Number(prompt('Digite um valor para ver sua tabuada:'))

for (let i = 1; i < 11; i++) {
    document.write(`${numero} x ${i} = ${numero * i}<br>`)
}