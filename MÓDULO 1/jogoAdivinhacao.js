/*cria um jogo no qual o jogador tenha que adivinhar um numero aleatorio de 1 a 100 .
o jogador possui 10 tentativas de acerto
o jogo deve informar se o numero é maior ou menor que o sorteado
o termina caso acabe as 10 tentativas ou o usuário acerte o numero sorteado*/

var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
    
});
var numeroSorteado = Math.round(Math.random() * 100);
if (numeroSorteado === 0 ){
    numeroSorteado = 1;
    
}
console.log(numeroSorteado);
var tentativas = 10;

pergunta();


function pergunta() {    
        rl.question(" Adivinhe um número entre 1 e 100: ", function(numero){
    numero = parseInt(numero);
    tentativas--;
    if (numero === numeroSorteado){
    console.log("Parabéns você acertou!!!!");
        rl.close();
    } else if(tentativas === 0){
        console.log("tentativas esgotadas!");
      rl.close();
        } else if(tentativas <= 3){
            console.log("VOCÊ SO TEM MAIS 3 TENTATIVAS !");
            pergunta();
        }
    else if(numero < numeroSorteado) {
        console.log("O numero digitado é menor que o numero sorteado, tente outra vez. " + tentativas + " tentativas restantes");
        pergunta();
}    else{
        console.log("o numero digitado é maior que o numero sorteado, tente outra vez. " + tentativas + " tentativas restantes");
        pergunta();
    }
    
});


}
/*rl.question("Qual seu nome?", function(jogador){
    jogador = jogador;
    pergunta();
});
*/












