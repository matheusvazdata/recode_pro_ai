// Exercício 1

/*
let numero_1, numero_2 = 0;

while (numero_2 == 0) {
    numero_1 = Number(prompt('Digite o numerador da divisão'));
    numero_2 = Number(prompt('Digite o denominador (precisa ser DIFERENTE de 0)'));
    document.write(`${numero_1} / ${numero_2} = ${numero_1 / numero_2}`);
}
*/

// Exercício 2

/*
let i = 1;
cont_dentro = 0;
cont_fora = 0;
valores_dentro = '';
valores_fora = '';

while (i <= 10) {
    numero = Number(prompt(`Digite o ${i}° valor`))

    if ((numero >= 10) && (numero <= 20)) {
        cont_dentro += 1
        valores_dentro = valores_dentro + '..' + numero
    } else {
        cont_fora += 1
        valores_fora = valores_fora + '..' + numero
    }

    i++
}

document.write(`Há ${cont_dentro} valores DENTRO do intervalo: ${valores_dentro}.<br>E há ${cont_fora} valores FORA do intervalo: ${valores_fora}.`)
*/

// Exercício 3

/*
let alunos = [];
let notas = [];
let aluno = '';
let nota = 0;
let soma = 0;
let cont = 0;
let media;

for (let i = 0; i < 5; i++) {
    alunos[i] = prompt(`Digite o nome do ${i + 1}° aluno`)

    notas[i] = Number(prompt(`Digite a nota de ${alunos[i]}`))

    document.write(`Aluno: ${alunos[i]} - Nota: ${notas[i]}<br>`)

    soma += notas[i]
    cont += 1
    media = soma / cont
}

alert(`Média dos alunos: ${media}`)

// alert(pessoa.nome)
// alert(pessoa.profissao)

for (const value in pessoa) {
    alert(pessoa[value])
}
*/

email = prompt('Digite seu e-mail')
senha = prompt('Digite sua senha')

let usuario = {
    email: email,
    senha: senha
}

let bd = {
    email: 'matheusvaz@email.com.br',
    senha: 'matheus#123'
}

if ((usuario.email == bd.email) && (usuario.senha == bd.senha)) {
    alert('Acesso permitido')
} else {
    alert('Acesso negado')
}