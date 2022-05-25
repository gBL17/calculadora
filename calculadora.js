let num1 = 8
let num2 = 9
let resultado = 0

function soma (x,y) {
    resultado = x + y;
}

function subtração (x,y){
    resultado = x - y
}

function divisao(x,y){
    resultado = x/y
}

function multiplicacao(x,y){
    resultado = x*y
}

function raiz2(x){
    resultado = Math.sqrt(x)
}

function elevado(x,y){
    resultado = x**y
}

function porcentagem(x,y){
    resultado = x*(y/100)
}

soma (num1,num2)
console.log(resultado)

subtração (num1,num2)
console.log(resultado)

divisao(num1,num2)
console.log(resultado)

multiplicacao(num1,num2)
console.log(resultado)

raiz2(num1)
console.log(resultado)

elevado(num1,num2)
console.log(resultado)

porcentagem(num1,num2)
console.log(resultado)