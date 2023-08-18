// 1.	Faça um algoritmo para subtrair dois valores, e exibir o texto "sucesso", se o resultado da operação for maior que 5. Senão, exibir o texto “falhou”.
const d = 10;
const e = 4;
resultado = d-e;

if(resultado > 5){
    console.log("Sucesso!")
}else{
    console.log("Falhou!")
}

// 2.	Faça um algoritmo para ler uma variável do tipo texto e exibir uma mensagem se o valor da variável for “casa”. Senão, outra mensagem deve ser exibida.
let f = "apartamento";

if(f=="casa"){
    console.log("A palavra é casa!")
}else{
    console.log("A palavra é " + f)
}

// 3.	Faça um algoritmo para multiplicar dois valores, e exibir uma mensagem se o resultado for maior ou igual à 100. Senão, outra mensagem deve ser exibida.
let g = 10;
let h = 10;
mult = g*h;

if(mult>=100){
    console.log("OK!")
}else{
    console.log("NOK!")
}