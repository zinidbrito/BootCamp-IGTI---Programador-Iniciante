var fs = require("fs");//cria uma variavel para chamar o método fs que remete a FILE SYSTEM 
console.log("Iniciando Leitura do Arquivo...")
var nomeArquivo = "meuArquivo.txt";

fs.writeFile(nomeArquivo, "Meu primeiro arquivo criado no JavaScript", function(err) { //objeto .whiteFile que cria um arquivo com a sintaxe 
    //("nomedoarquivo.extensão", "conteudo do arquivo", "function(err)" sendo este ultimo para verificar se ocorreu erro na criação do arquivo
    if (err) { //testa primeiro se ocorreu um erro
        console.log(err); //imprime a saida caso verdadeiro
    } else {
        console.log("arquivo escrito com sucesso");

        fs.appendFile(nomeArquivo, "\nNOVA LINHA DE  TEXTO", function(err){ //. appendFile adiciona texto ao arquivo ja criado, caso o arquivo nao existe cria outro arquivo com o novo conteudo
            //sintaxe ("nomeDoArquivoAAcrescentarOTexto.extensão", "conteudoDoTExtoNovo", function(err) <== para testar se ocorreu erro na criação do arquivo)
            if (err) {
                console.log(err);
            } else {
                fs.readFile(nomeArquivo, "utf-8", function(err, data) { //.readFile le o arquivo criado com a seguinte sintaxe :
                    // ("nomeDoArquivoCriado.extensão", "utf=8" **padrão de formatação do arquivo**, function(err <== **para tester se executou**, data) <=== para imprimir o conteudo do arquivo
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(data);
                    }
                });
            }
        });

    }
});

