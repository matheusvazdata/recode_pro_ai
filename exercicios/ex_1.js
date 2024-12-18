function somar(num_1, num2) { // Aqui num_1 e num_2 representam "parâmetros" da função. Eles são apenas "caixas" que posteriormente receberão valores quando eu chamar a função criada e passá-los como "argumentos"
    return `${num_1} + ${num2} = ${num_1 + num2} `
}

let numero_1 = 5 // As variáveis criadas aqui ainda não tem nenhuma relação com a função criada anteriormente
let numero_2 = 9

let soma = somar(numero_1, numero_2) // Aqui, eu estou passando as variáveis antes criadas e "populadas", como argumentos da função. Lembra das caixas num_1 e num_2? Agora elas receberam os valores armazenados nas variáveis numero_1 e numero_2, respectivamente. Por fim, o resultado do processamento da função é armazenado na variável "soma"

console.log(soma) // Impressão do resultado