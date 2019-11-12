Desafio 01-1. Primeiros passos com JS
Desafios para fortalecer os conhecimentos obtidos at� aqui.

C�lculo de IMC
Crie um programa para calcular o IMC e n�vel de obesidade de uma pessoa.

Comece criando constantes para armazenar o nome, peso, altura e sexo de uma pessoa, por exemplo:

const nome = 'Carlos'
const peso = 84
const altura = 1.88
A partir desses dados armazene em uma constante chamada imc o c�lculo do �ndice de massa corporal definido pela f�rmula abaixo:

peso / (altura * altura)
Baseado no valor obtido atrav�s desse c�lculo exiba as seguintes mensagens:

SE o IMC maior ou igual a 30: Carlos voc� est� acima do peso;
SE o IMC menor que 29.9: Carlos voc� n�o est� acima do peso;
C�lculo de aposentadoria
Crie um programa para calcular a aposentadoria de uma pessoa.

Obs.: Esse c�lculo � fict�cio, dentro da aposentadoria existem muitos outros fatores para serem levados em conta :)

Comece criando constantes para armazenar nome, sexo, idade e contribuicao(em anos), por exemplo:

const nome = 'Silvana'
const sexo = 'F'
const idade = 48
const contribuicao = 23
Baseado nos valores acima utilize as f�rmulas a seguir para calcular se a pessoa est� apta ou n�o para se aposentar e no fim imprima uma mensagem em tela.

O tempo de contribui��o m�nimo para homens � de 35 anos e, para mulheres, 30 anos;
Utilizando a regra 85-95, a soma da idade com o tempo de contribui��o do homem precisa ser de no m�nimo 95 anos, enquanto a mulher precisa ter no m�nimo 85 anos na soma;
Com base nas regras acima imprima na tela as mensagens:

SE a pessoa estiver aposentada: Silvana, voc� pode se aposentar!;
SE a pessoa N�O estiver aposentada: Silvana, voc� ainda n�o pode se aposentar!;
Dica: Voc� pode unir duas condi��es, veja o exemplo abaixo

if (condicao1) {
  if (condicao2) {
    // Condi��o 1 e 2 passaram
  } else { 
    // Condi��o 1 passou, por�m condi��o 2 n�o passou
  }
} else {
  // Condi��o 1 n�o passou
}