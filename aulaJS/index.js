//Criar programa que calcula a média
//das notas entre alunos e envia
// mensagem de cálculo da média

// delcaração de variavéis com nome dos alunos
//variavéis contendo a nota dos alunos

const alunosDaTurmaA = [
    {
        nome:'Kaline',
        nota: 9.8
    },

    {
        nome:'Caio',
        nota: 10
    },

    {
        nome:'kiki',
        nota: 2
    }    
]

const alunosDaTurmaB = [
    {
        nome:'Lucky',
        nota: 9.8
    },

    {
        nome:'lola',
        nota: 10
    },

    {
        nome:'belinha',
        nota: 2
    } 
]

//função que calcula da merdia dos alunos
function calculaMedia (alunos){
    return (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3
}




//se a média for maior que 7, parabenizar a turma
if(media >= 7){
   console.log(`A turma está de parabéns, a média da turma é igual ${media}.`);
}else {
    console.log(`A turma tem que estudar mais, a media é menor que 7.`);
}

