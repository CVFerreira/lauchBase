esafio 01-2. Lidando com objetos e vetores
Desafios para fortalecer os conhecimentos obtidos at� aqui.

Constru��o e impress�o de objetos
Crie um programa que armazena dados da empresa Rocketseat dentro de um objeto chamado empresa. Os dados a serem armazenados s�o:

Nome: Rocketseat
Cor: Roxo
Foco: Programa��o
Endere�o:
Rua: Rua Guilherme Gembala
N�mero: 260
Obs.: Para armazenar os dados de endere�o da empresa voc� pode criar objetos intercalados, por exemplo:

const usuario = {
  nome: 'Diego',
  empresa: {
    nome: 'Rocketseat'
  },
}
Imprima em tela utilizando console.log o nome da empresa e seu endere�o no seguinte formato:

A empresa Rocketseat est� localizada em Rua Guilherme Gembala, 260
Obs. Para imprimir em tela utilize o formato de template strings, por exemplo

console.log(`O nome do usu�rio � ${usuario.nome}`);
Vetores e objetos
Crie um programa com um objeto para armazenar dados de um programador como nome, idade e tecnologias que trabalha.

Um programador pode trabalhar com v�rias tecnologias, por isso armazene essas tecnologias em um array.

As tecnologias tamb�m devem ser objetos contendo nome e especialidade, use as tecnologias abaixo:

{ nome: 'C++', especialidade: 'Desktop' }
{ nome: 'Python', especialidade: 'Data Science' }
{ nome: 'JavaScript', especialidade: 'Web/Mobile' }
Por exemplo:

const objeto = {
  propriedade: [
    { nome: 'C++', especialidade: 'Desktop' }, 
    { nome: 'JavaScript', especialidade: 'Web/Mobile' }
  ]
}
Imprima em tela o nome e especialidade da primeira tecnologia que o usu�rio utiliza no seguinte formato:

O usu�rio Carlos tem 32 anos e usa a tecnologia C++ com especialidade em Desktop