var carros = ["Gol", "Palio", "Uno", "Sandero"];
//.pop REMOVE O ULTIMO ELEMENTO DO ARRAY e retorna o elemento removido
var carro = carros.pop(); 
console.log(carro);
console.log("UTILIZANDO POP REMOVENDO O ULTIMO ELEMENTO DA LISTA ==> " + carros);

//push INSERE ELEMENTOS NO FINAL DO ARRAY do array/lista e retorna seu tamanho
carros.push("Ka");
console.log("UTILZANDO PUSH ADICIONANDO KÁ AO FINAL DA LISTA ==> " + carros);

//.shift REMOVE O PRIMEIRO elemento do array, retorna o elemento removido e atualiza o indice , sem deixar espaço vazio na lista
carro = carros.shift();
console.log("UTILIZANDO SHIFT REMOVENDO O PRIMEIRO ELEMENTO DA LISTA ==>" + carros);
//.unshift INSERE ELEMENTOS NO INÍCIO do array, atualiza os outros indices e retorna o tamanho do array
carros.unshift("Onix");
console.log("UTILIZANDO UNSHIFT ADICIONANDO ONIX AO INICIO DA LISTA ==>" + carros);
//ATUALIZA ELEMENTO NA POSIÇÃO INFORMADA PELO ARRAY
carros[2] = "Novo Uno";
console.log("ATUALIZANDO O INDICE DE NUMERO 2 " + carros);
//REMOVE ELEMENTO DO INDICE INFORMADO, DEIXANDO UNDEFINED (VAZIO) NO LUGAR;
delete carros[2];
console.log(carros);
//PRIMEIRO PARAMENTRO É POSIÇÃO INICIAL DE ENTRADA DOS ELEMENTOS
//SEGUNDO PARAMETRO É A  POSIÇÃO ELEMENTO QUE SERÁ REMOVIDO
//TERCEIRO PARAMENTRO É A ENTRADA DOS ELEMENTOS A PARTIR DA POSIÇÃO INCIAL DEFINIDA
//=========PERMITE REMOVER E INSERIR ELEMENTOS NO MEIO DO ARRAY=============
carros.splice(2, 1, "Pagero", "HRV"); 
console.log(carros);
//JUNTA DOIS ARRAYS E RETORNA O NOVO ARRAY CRIADO
var carrosAntigos = ["Brasilia", "Monza", "Fusca"];
var carrosAntigos2 = ["Corcel", "Chevette", "Corsa"];
var todosOsCarros = carros.concat(carrosAntigos, carrosAntigos2);
console.log(todosOsCarros);
//SLICE CRIA UM NOVO ARRAY SEM ALTEAR O ARRAY ORIGINAL
//PRIMEIRO PARAMETRO POSIÇÃO INCIAL
//SEGUNDO PARAMETRO OPCIONAL É O LIMITE NÃO INCLUSO (PARA ANTES DE CHEGAR NO PARAMETRO)
 var novoArray = todosOsCarros.slice(1);
 console.log(todosOsCarros);

 var novoArray2 = todosOsCarros.slice(2, 5);
 console.log(novoArray2);



