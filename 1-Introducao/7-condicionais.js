console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array("Salvador", "São Paulo", "Rio de Janeiro");

const idadeComprador = 15;
const estaAcompanhado = true;

if (idadeComprador >= 18 || estaAcompanhado) {
	console.log("Comprador maior de idade ou acompanhado");
	listaDeDestinos.splice(1, 1);
} else {
	console.log("Não é maior de idade e não posso vender");
}

console.log(listaDeDestinos);

// && -> e
// || -> ou
