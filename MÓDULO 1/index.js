console.log("Hello world no arquivo externo");

function clickBotao(){
    //document.getElementById("paragrafo1").innerHTML = "none"; INNERHTML altera conteúdo inteiro
    document.getElementById("paragrafo1").style.display = "none";

  
    for (var i = 0; i < document.getElementsByClassName("paragrafo").length; i++){
        document.getElementsByClassName("paragrafo")[i].style.color = "blue";
        document.getElementsByClassName("paragrafo")[i].style.fontWeight = "bold";
    }
    
}

function clickBotao2(){
    document.getElementById("paragrafo1").style.display = "block";
    for (var i = 0; i < document.getElementsByTagName("button").length; i++){
        document.getElementsByTagName("button")[i].style.fontSize = "40px";
    }
}

function ligarLampada(){
    document.getElementById("lampada").src = "lampadaLigada.png";
}

function desligarLampada(){
    document.getElementById("lampada").src = "lampadaDesligada.png";
}

var quantidadeElementos = 0;

function adicionarElementos(){
    var elemento = document.createElement("P");
    elemento.innerHTML = "elemento " + quantidadeElementos;
    quantidadeElementos++;
    document.getElementById("divElementos").appendChild(elemento);
}

function removerElementos(){
    var filhos = document.getElementById("divElementos").childNodes;
    var size = filhos.length;
    for (var i = 0; i < size; i++) {
        document.getElementById("divElementos").removeChild(filhos[i]);
    }

}