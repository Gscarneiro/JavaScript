var botao = document.querySelector("#adicionar-paciente");

botao.addEventListener("click", function (event) {
	event.preventDefault();

	var form = document.querySelector(".form-add"); //seleciona o <form>

	var paciente = getPaciente(form);

	var pacienteTr = montaTr(paciente);

	var tabela = document.querySelector("#tabela-pacientes"); // seleciona a tabela

	tabela.appendChild(pacienteTr); //vincula o tr a tabela

	form.reset();
});

function getPaciente(form) {
	var paciente = {
		nome: form.nome.value,
		peso: form.peso.value,
		altura: form.altura.value,
		gordura: form.gordura.value,
		imc: calculaImc(form.peso.value, form.altura.value),
	};

	return paciente;
}

function montaTr(paciente) {
	var pacienteTr = document.createElement("tr"); // cria elemento <tr>
	pacienteTr.classList.add("pacicente");

	pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
	pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
	pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
	pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
	pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

	return pacienteTr;
}

function montaTd(dado, classe) {
	var td = document.createElement("td"); // cria elementos <td>
	td.textContent = dado;
	td.classList.add(classe);
}
