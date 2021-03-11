var carros = ["gol","palio","uno"]; //ARRAY/LISTA
console.log(carros);

console.log("Primeira posição: " + carros[0]);
carros[2] = "Argo";
console.log("Alteração da posição 2: " + carros[2]);

console.log("Tamnho do array: " + carros.length);
console.log("utimo elemteno do array: " + carros[carros.length -1]);

carros[3] = "sandero";
console.log("utimo elemteno do array: " + carros[carros.length -1]);

carros[carros.length] = "Fit";
console.log("ultimo elemento do array: " + carros[carros.length -1]);  

carros.push("Lamborghini");
console.log("ultimo elemento do array: " + carros[carros.length -1]);  
console.log(carros);

carros.push(123);
console.log(carros);





