/**
 * Atividade 1: Alunos Aprovados
Crie uma função que recebe o array alunos e um número que irá representar a média final;
Percorra o array e popule um novo array auxiliar apenas com os alunos cujas notas são 
maiores ou iguais à média final;
Utilize a técnica "object destructuring" para manipular as propriedades desejadas de 
cada aluno.
Atividade 2: This
Dada a função calculaIdade, utilize os métodos call e apply para modificar o valor de this. 
Crie seus próprios objetos para esta atividade!
 */


//Entrada de dados
const medio = {
    nome: 'aluno01',
    turma: 'alfa',
    nota: 8.7,
    idade: 16
}


const fundamental = [
    {
        nome: 'aluno01',
        turma: 'alfa',
        nota: 8.7,
        idade: 13
    },
    {
        nome: 'aluno02',
        turma: 'alfa',
        nota: 6,
        idade: 14
    },
    {
        nome: 'aluno03',
        turma: 'alfa',
        nota: 5,
        idade: 15
    },
    {
        nome: 'aluno04',
        turma: 'alfa',
        nota: 7.8,
        idade: 13
    }
]




function aprovados(array, media) {

    let aprova = [];

    array.forEach(element => {
        if(element.nota >= 7) {
            aprova.push(element)
        }
    });

    return aprova;
}


console.log(aprovados(passados, 7));
















