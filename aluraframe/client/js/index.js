//apenas utilizado como exemplo para lembrar de como funciona o DOM

//pega os campos do form
var campos = [
	document.querySelector("#data"),
	document.querySelector("#quantidade"),
	document.querySelector("#valor"),
];

//imprime campos no console
console.log(campos);

//pega corpo da tabela
var tbody = document.querySelector("table tbody");

// ouve o evento ao clicar o submit do form
document.querySelector(".form").addEventListener("submit", function (event) {
	//preve que a pagina recarregue depois do submit
	event.preventDefault();

	//pega a a linha da tabela
	var tr = document.createElement("tr");

	//para cada coluna da tabela preenche com o valor do input
	campos.forEach(function (campo) {
		var td = document.createElement("td");
		td.textContent = campo.value;
		tr.appendChild(td);
	});

	//cria coluna volume, faz calculo de seu conteudo (quantidade * valor) e adiciona na linha
	var tdVolume = document.createElement("td");
	tdVolume.textContent = campos[1].value * campos[2].value;
	tr.appendChild(tdVolume);

	//adiciona linha na tabela
	tbody.appendChild(tr);

	//reseta valores dos inputs
	campos[0].value = "";
	campos[1].value = 1;
	campos[2].value = 0;

	//foca no primeiro
	campos[0].focus();
});
