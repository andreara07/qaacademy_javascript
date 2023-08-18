// 1.	Faça um algortimo para subtrair dois valores, e exibir o texto "sucesso" se o resultado da operação for igual ou maior que 100. Se o resultado for menor que 50, exibir a mensagem "média".
let n1 = 25;
let n2 = 6;
let subt = n1-n2;

if(subt >= 100){
    console.log("Sucesso!")
}if(subt<50){
    console.log("Média!")
}

// 2.	Faça um algoritmo para ler uma variável do tipo texto e exibir uma mensagem se o valor da variável for "casa". Se o valor for "moto", exibir outra mensagem.
let text = "moto";
if(text=="casa"){
    console.log("A variável é casa")
}if(text=="moto"){
    console.log("A variável é moto")
}

// 3.	Faça um algoritmo para multiplicar dois valores, e exibir uma mensagem se o resultado for maior ou igual à 100. Senão, outra mensagem deve ser exibida.
let v1 = 17;
let v2 = 3;
let result = v1*v2;

if(result>=100){
    console.log("O resultado é maior ou igual à 100")
}else{
    console.log("O resultado é "+result)
}

// 4.	Faça um algoritmo para ler um número inteiro, armazenar em uma variável, calcular o dobro, e exibir.
let int = 7;
const resultado = int*2;

    console.log(resultado)

// 5.	Faça um algoritmo para ler três números inteiro, armazenas em variáves, e exibir a soma, a subtração, multiplicação e a média dos três números digitados.
let int1 = 5;
let int2 = 10;
let int3 = 15;
const soma = int1+int2+int3;
const subtracao = int1-int2-int3;
const multiplicacao = int1*int2*int3;
const med = (int1+int2+int3)/3;

console.log("O resultado da soma é: " + soma, "\nO resultado da subtração é: " + subtracao, "\nO resultado da multiplicação é: " + multiplicacao, "\nO resultado da média é: " + med)

// 6.	Faça um algoritmo para ler duas notas, calcular a média.
// SE a média > 5, exibir aprovado;
// SE a média < que 5, exibir reprovado;
// SE a média = 5, exibir exame.

const nota1 = 5;
const nota2 = 5;
const media = (nota1+nota2)/2;

if(media>5){
    console.log("Aprovado!")
}if(media<5){
    console.log("Reprovado!")
}if(media==5){
    console.log("Exame!")
}

