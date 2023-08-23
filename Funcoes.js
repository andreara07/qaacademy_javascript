function somar(){
    const a = 7;
    const b = 14;
    const soma = a+b;
    console.log(soma)
}
somar()

// 1.	Crie um método de subtração.
function subtrair(){
    const c = 25;
    const d = 5;
    const subtracao = c-d;
    console.log(subtracao)
}
subtrair()

function somaComParametro(a,b){
    const soma = a+b;
    console.log(soma)
   }
somaComParametro(7,7)

// 2.	Crie um método de subtração com parâmetro.
function subtracaoComParametro(c,d){
    const subtracao = c-d;
    console.log(subtracao)
}
subtracaoComParametro(10,2)

function exemploRetorno(){
    return 10;
}
console.log(exemploRetorno())

function somaComRetorno(a,b,c){
    const somatoria = a+b+c;
    return somatoria;
}
console.log(somaComRetorno(25,10,10))

function subtracaoComRetorno(a,b,c){
    const subtracao = a-b-c;
    return subtracao;
}
console.log(subtracaoComRetorno(10,2,2))