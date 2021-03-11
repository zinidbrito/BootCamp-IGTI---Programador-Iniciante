
var num = 13;
var count = 0;
var i = 0;
for (i = 1; i <= num;i++){ //divide o numero n vezes
    if(num % i === 0){ // se o resto da divisão for 0, acrescento +1 a contagem
        count = count ++;
    }
}
if (count == 2){ // se o numero contou 2, significa que foi dividido duas vezes, logo é primo
    console.log("O numero " + num + " é um numero primo");
} else {
    console.log("O numero " + num + " não é um numero primo");
}

