var tabela = document.querySelector("#tabela-pacientes");
tabela.addEventListener("dblclick", function () {
	if (event.target.tagName == "TD") {
		setTimeout(function () {
			event.target.parentNode.remove();
		}, 500);
	}
});
