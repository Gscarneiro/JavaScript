console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array("Salvador", "São Paulo", "Rio de Janeiro");

const idadeComprador = 15;
const estaAcompanhado = true;
let temPassagemComprada = false;
const destino = "Salvador";

const podeComprar = idadeComprador >= 18 || estaAcompanhado == true;

let contador = 0;
while (contador < 3) {
	if (listaDeDestinos[contador] == destino) {
		console.log("Destino existe");
		break;
	} else {
		console.log("Destino não");
	}
	contador++;
}

for (let i = 0; i < 3; i++) {
	if (listaDeDestinos[contador] == destino) {
		console.log("Destino existe");
		break;
	}
}

console.log("Embarque: ");
if (idadeComprador >= 18 && temPassagemComprada) {
	console.log("Pode embarcar");
} else {
	console.log("Não pode embarcar");
}
