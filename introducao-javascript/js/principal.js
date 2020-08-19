var pacientes = document.querySelectorAll(".paciente"); // traz array de elementos com a classe

for (var i = 0; i < pacientes.length; i++) {
	var tdPeso = pacientes[i].querySelector(".info-peso");
	var tdAltura = pacientes[i].querySelector(".info-altura");
	var tdImc = pacientes[i].querySelector(".info-imc");

	var peso = tdPeso.textContent;
	var altura = tdAltura.textContent;

	var pesoEhValido = true; // assumindo de boa fé que o peso é válido
	var alturaEhValida = true; // assumindo de boa fé que a altura é válida

	if (peso <= 0 || peso >= 1000) {
		pesoEhValido = false;
		tdPeso.textContent = "peso inválido";
		pacientes[i].classList.add("paciente-invalido"); //add classe do css ao elemento css
	}

	if (altura <= 0 || altura >= 3.0) {
		alturaEhValida = false;
		tdAltura.textContent = "altura inválida";
		pacientes[i].classList.add("paciente-invalido");
	}

	if (pesoEhValido && alturaEhValida) {
		var imc = peso / (altura * altura);
		tdImc.textContent = imc.toFixed(2); //arruma as casas decimais
	}
}

var botao = document.querySelector("#adicionar-paciente");

botao.addEventListener("click", function (event) {
	event.preventDefault();

	var form = document.querySelector(".form-add"); //seleciona o <form>

	var nome = form.nome.value; //pega pelo "name" dos atributos os valores digitados
	var peso = form.peso.value;
	var altura = form.altura.value;
	var gordura = form.gordura.value;

	var pacienteTR = document.createElement("tr"); // cria elemento <tr>

	var nomeTd = document.createElement("td"); // cria elementos <td>
	var pesoTd = document.createElement("td");
	var alturaTd = document.createElement("td");
	var gorduraTd = document.createElement("td");
	var imcTd = document.createElement("td");

	nomeTd.textContent = nome; //preenche td com valores dos atributos digitados no form
	pesoTd.textContent = peso;
	alturaTd.textContent = altura;
	gorduraTd.textContent = gordura;

	pacienteTr.appendChild(nomeTd); //conecta os tds ao tr
	pacienteTr.appendChild(pesoTd);
	pacienteTr.appendChild(alturaTd);
	pacienteTr.appendChild(gorduraTd);

	var tabela = document.querySelector("#tabela-pacientes"); // seleciona a tabela

	tabela.appendChild(pacienteTr); //vincula o tr a tabela
});
