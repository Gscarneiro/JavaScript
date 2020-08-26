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
		var imc = calculaImc(peso, altura);
		tdImc.textContent = imc; //arruma as casas decimais
	}
}

function calculaImc(peso, altura) {
	return (peso / (altura * altura)).toFixed(2);
}
