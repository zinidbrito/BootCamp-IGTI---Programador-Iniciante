var a = 50;
var b = 50;
if (a > b) {
    //condição a ser executada dentro deste bloco se for TRUE;
    console.log("A é maior do que B");
    } 
    else if (a < b) {
    // caso a condição seja FALSE executa dentro deste bloco
        console.log("B É MAIOR DO QUE A");
 }

 if (a > b){
     console.log("executar somente se a > b");
      
    }
    console.log("sempre executar");

    var c = 30;
    var d = 30;
    if (c >= d) {
        console.log("C miaor ou igual a d");
    }
if (d < c ) {
    console.log("B MENOR OU IGUAL A C");
    }
var e = 10;
var f = "10";
if (e === f) { //QUNADO TEM === TAMBÉM COMPARA SE O TIPO DA VARIAVEL É IGUAL == FAZ A CONVERSÃO 
    //E COMPARA SE A VARIAVEL É IGUAL SENDO O TIPO QUE FOR
    console.log("E É IGUAL A F");
}
g = 10;
h = 11;
if (g !=h) {
    console.log("g é diferente de h");
}


var i = 4;
var j = 3;
var k = 5;
var l = 5;

if ((i > j) && (l > k)) {
    console.log("i maior que j");
}
if ((i === j) || (k === l)){
    console.log("um dos dois eram validos");
        if (k === 5) {
            console.log("K É IGUAL A 5");
        } else {
            if (k === 4) {

            } else if (k === 3) {

            }
        }
}

if (!(1 > 2)) {
    console.log("Execute...");
}

var fruta = "mamão";
var valor = 0;
if (fruta === "Banana") {
    valor = 2;
} else if (fruta === "maça") {
    valor = 3;
}else if (fruta === "abacaxi") {
    valor = 4;
} else if (fruta === "melão") {
    valor = 5;
} else if (fruta === "mamão") {
    valor = 5.50;
} //else {
    //valor = 10;
//}
 //console.log("valor: " + valor);

 switch(fruta) {
     case "Banana":
         valor = 2;
         break;
    case "maça":
        valor =  3;
        break;
    case "abacaxi":
        valor = 4;
    case "melão":
        valor =  5;
    case "mamão":
        valor = 5.50;
    default:
        valor = 10.00;
    }
console.log("VALOR da fruta: "+ valor + " REAIS");

var x = 1;
var y = 2;

resultado =  x > y ? "sim" : "não"; //operador ternário "?" É IGUAL AO IF, E SENÃO IGUAL A ":"
console.log(resultado);


