// while
let i = 0;
while(i<20){
	console.log("O valor de i é: "+ i);
	i++; //i= i+1;
}

// do while
let c = 0;
do{
	console.log("O valor de c é: "+ c);
	c++;
}while(c<20);

// for
let j = 0;
for(j=0; j<10; j++){
	console.log("O valor de j é: "+ j);
}

// 1.	Faça um algoritmo para ler um número inteiro e exibir ele 5 vezes.
const num = 7;
let a = 1;

while(a<=5){
    console.log(num)
    a=a+1;
}

// 2.	Faça um algoritmo para ler um número inteiro entre: 1 e 10, calcular e exibir a tabuada deste número digitado. Ex.: 10x1 = 10, ..., 10x10 = 100.
const int = 10;
let mult = 1;

while(mult<=10){
	console.log(int + " x " + mult + " = " + mult*int)
	mult=mult+1
}
	console.log("Fim da tabuada!")

// 3.	Faça um algoritmo para somar três números e exibir o resultado (SEM LOOP).
const n1 = 3;
const n2 = 5;
const n3 = 2;
result = n1+n2+n3;

console.log(result)

// 4.	Faça um algoritmo para exibir de 30 à 45.
let inicio = 30;

while(inicio<=45){
	console.log(inicio)
	inicio++;
}

// 5.	Faça um algoritmo para exibir de 100 à 0 (decrescente).
let dec = 100;
const fim = 0;

while(dec<=100 && dec>=0){
	console.log(dec)
	dec--;
}