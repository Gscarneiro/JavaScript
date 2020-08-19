console.log(`Trabalhando com listas`);

const listaDeDestinos = new Array("Salvador", "São Paulo", "Rio de Janeiro");

listaDeDestinos.push("Curitiba");

listaDeDestinos.splice(1, 1); // deleta a partir da posicao

listaDeDestinos.pop(); // deleta o ultimo

console.log(listaDeDestinos);
console.log(listaDeDestinos[1]);
