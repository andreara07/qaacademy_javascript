// 1.	Faça um algoritmo para subtrair dois valores, e exibir o texto "sucesso", se o resultado da operação for maior que 5 e menor que 10. Senão, exibir o texto "falhou".
let num1 = 10;
let num2 = 5;
let subtracao = num1-num2;

if(subtracao >5 && subtracao <10){
    console.log("Sucesso!")
}else{
    console.log("Falhou!")
}

// 2.	Faça um algoritmo para ler uma variável do tipo texto e exibir uma mensagem se o valor da variável for "casa" ou "tartaruga". Senão, outra mensagem deve ser exibida.
let texto = "cachorro"

if(texto=="casa" || texto=="tartaruga"){
    console.log("A variável é casa ou tartaruga")
}else{
    console.log("A variável é "+ texto)
}

// 3.	Faça um algoritmo para multiplicar dois valores, e exibir uma mensagem se o resultado for diferente de 100. Senão, outra mensagem deve ser exibida.
let valor1 = 5;
let valor2 = 20;
let resultado = valor1*valor2;

if(resultado!=100){
    console.log("OK!");
}else{
    console.log("NOK!")
}