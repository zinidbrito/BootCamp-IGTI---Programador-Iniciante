for (var i = 0; i <= 10; i++){
    //console.log(i);
}

var carros = ["GOL","PALIO","UNO","CELTA","SANDERO"];
for (var i = 0; i <carros.length; i++){
    //console.log(carros[i]);
}
for (var i = carros.length -1; i >= 0; i--){
    //console.log(carros[i]);
}


var i = 0;
while (i < carros.length){
    //console.log(carros[i]);
    i++;
}
//while (true){

var i = 0;
while (i < carros.length){
    console.log(carros[i]);
    if (carros[i] === "PALIO"){
        console.log("Encontrei o palio");
        break;

    }
    i++;
}

var numeros = [1,2,3,4,5,6,7,8,9,10];
var i = 0;
    while (i < numeros.length){
var num = numeros[i];
i++;

if (num % 2 !== 0){
    //console.log(num + " É impar");
    continue;
}   
    }


    var j = 30;
do {
    j++;
    console.log(j);

}while (j<10);

for (var carro of carros){
    console.log(carro);
}

