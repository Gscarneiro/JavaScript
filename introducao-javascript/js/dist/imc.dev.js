"use strict";

var pacientes = document.querySelectorAll(".paciente"); // traz array de elementos com a classe

for (var i = 0; i < pacientes.length; i++) {
  var paciente = pacientes[i];
  var tdPeso = paciente.querySelector(".info-peso");
  var tdAltura = paciente.querySelector(".info-altura");
  var tdImc = paciente.querySelector(".info-imc");
  var peso = tdPeso.textContent;
  var altura = tdAltura.textContent;

  if (validaPeso(peso) == false) {
    tdImc.textContent = "peso inválido";
    paciente.classList.add("paciente-invalido"); //add classe do css ao elemento css
  }

  if (validaAltura(altura) == false) {
    tdImc.textContent = "altura inválida";
    paciente.classList.add("paciente-invalido");
  }

  if (validaPesoAltura()) {
    var imc = calculaImc(peso, altura);
    tdImc.textContent = imc;
  }
}

function validaPeso(peso) {
  return peso >= 0 && peso <= 500;
}

function validaAltura(altura) {
  return altura > 0 && altura < 3.0;
}

function validaPesoAltura() {
  return validaPeso(peso) && validaAltura(altura);
}

function calculaImc(peso, altura) {
  return (peso / (altura * altura)).toFixed(2); //arruma as casas decimais
}