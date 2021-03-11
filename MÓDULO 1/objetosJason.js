var pessoa =  { //objeto json, sempre divido por vírgulas
 nome : "Gabriel",
 idade: 40,
 telefone: "(21) 964360622",
temCarro: true,
 animaisDeEstimacao: ["Pingo","Volly"],
pai: {
nome: "Evilasio",
idade: "não sei"
}

};

//console.log(pessoa);
//console.log(pessoa.nome);
//console.log(pessoa.pai);

//pessoa.animaisDeEstimacao.push("Billy");
console.log(pessoa.animaisDeEstimacao);
//pessoa.mae = "Edineia";
///pessoa.pai.nome += " Tavares";
//console.log(pessoa.pai.nome);
//console.log(pessoa.mae);

console.log(JSON.stringify(pessoa));
