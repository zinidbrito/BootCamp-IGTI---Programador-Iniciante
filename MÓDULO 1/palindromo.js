//Parte 1 - definir uma palavra como variavel
//parte 2 - inverter essa palavra na variavel
//parte 3 - comparar se as palavras nas variaveis invertidas e originais são equivalentes são palindromo
/*for (var i = 0; i > palavraOriginal.length; i--){
palavraInvertida  += palavraOriginal[i];
    
}*/
//console.log(palavraInvertida);

/*
var palavraInvertida;

if (palavraOriginal === palavraInvertida) {

}*/
var palavraOriginal = "ARARA";
var palavraInvertida = "";


for (var i = palavraOriginal.length - 1; i >= 0; i--){
    console.log(i);
    palavraInvertida += palavraOriginal[i];
}

console.log(palavraOriginal);
console.log(palavraInvertida);

if (palavraInvertida === palavraOriginal){
    console.log("A PALAVRA " + palavraOriginal + " É UM PALINDROMO");
} else console.log( "A palavra "+ palavraOriginal + " NÃO É UM PALINDROMO");

