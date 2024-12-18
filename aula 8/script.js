/*
function irAoCinemaOuNao(quantia) {
    quantia = quantia.toFixed(2)
    mensagem = ''
    if (quantia >= 50) {
        mensagem = `Ooopaa! Você tem R$ ${quantia}, dinheiro suficiente para ir ao cinema!`
    } else {
        mensagem = `Que pena, você só tem R$ ${quantia}! É melhor ficar em casa e ver um filme!`
    }

    return mensagem
}

quantia_digitada = Number(prompt('Digite a quantia que você tem em dinheiro'))

document.write(irAoCinemaOuNao(quantia_digitada))
*/

/*
soma = (a,b) => {
    return a + b
}

document.write(typeof(soma) + '<br>')
document.write(typeof(soma(1, 5)))
*/

valor = Number(prompt(`Digite o valor em R$ que deseja converter`))
moeda = prompt(`Digite a moeda para a qual desejar converter o valor de R$ ${valor.toFixed(2)}. Sendo "d" para DÓLAR e "e" para EURO.`)

moeda = moeda.toLowerCase()

conversor = (valor, moeda) => {
    mensagem = ''
    if (moeda === 'd') {
        mensagem = `R$ ${valor.toFixed(2)} equivale a `
        valor = valor / 6.15
        mensagem += `US$ ${valor.toFixed(2)}.`
    } else if (moeda === 'e') {
        mensagem = `R$ ${valor.toFixed(2)} equivale a `
        valor = valor / 6.47
        mensagem += `€ ${valor.toFixed(2)}.`
    }

    return mensagem
}

document.write(conversor(valor, moeda))