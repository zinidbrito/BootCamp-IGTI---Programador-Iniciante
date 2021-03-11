var soma = 1 + 2;
var subtracao = 5 -2;
var multiplicacao =  3 * 5;
var divisão = 3 / 2;
var resto = 20 % 3;

console.log("SOMA: " + soma);
console.log("SUBTRAÇÃO: " + subtracao);
console.log("MULTIPLICAÇÃO: " + multiplicacao);
console.log("DIVISÃO: " + divisão);
console.log("RESTO: " + resto);
console.log(soma);
console.log(soma);
console.log(soma);

var num1 = 10;
var num2 = 50;
var resultado = (num1 + num2) / (8 + 2);
console.log("Precedência: "+ resultado);

var incremento = 1;
incremento = incremento +1;
incremento++;
console.log(incremento);
var atribuicaoComAdicao = 5;
atribuicaoComAdicao = + 6;
console.log(atribuicaoComAdicao);
atribuicaoComAdicao += 6; //memso que a = a +6;
console.log("Atribuicão com adição: "+ atribuicaoComAdicao);

var decremento = 5;
decremento = decremento - 1;
decremento--;
console.log("decremento: " + decremento);

var atribuicaoComSubtracao = 10;
atribuicaoComSubtracao = atribuicaoComSubtracao -4;
console.log("atribuicao com subtracao: " + atribuicaoComSubtracao);


var a = 5;
var b = 5;
var adicaoIncrementoPosterior = a + b++;
console.log("Adicao com incremento posterior: " + adicaoIncrementoPosterior);//Acrescenta + 1 em B DEPOIS da operação
console.log(b);
a = 5;
b = 5;
var adicaoIncrementoAnterior = a + ++b;
console.log("Adicao com incremento anterior: " + adicaoIncrementoAnterior);//Acrescenta + 1 em B ANTES da operação
console.log(b);
//outra operações seguem da mesma forma bastando alterar o operadore lógico;