import { Cliente } from "./Cliente.js";

//classe abstrata
export class Conta {
	//#saldo = 0; é uma proposta de campo privado
	//_saldo = 0; é a convenção para campos que nao devem ser mexidos fora da classe

	constructor(saldoInicial, cliente, agencia) {
		if (this.constructor == Conta) {
			throw new Error("não pode criar Conta pois é abstrat");
		}

		this._saldo = saldoInicial;
		this._cliente = cliente;
		this._agencia = agencia;
	}

	set cliente(novoValor) {
		if (novoValor instanceof Cliente) {
			this._cliente = novoValor;
		}
	}

	get cliente() {
		return this._cliente;
	}

	get saldo() {
		return this._saldo;
	}

	//método abstrato
	sacar(valor) {
		throw new Error("Método Sacar da conta é abstrato");
	}

	_sacar(valor, taxa) {
		const valorSacado = valor * taxa;
		if (this._saldo >= valorSacado) {
			this._saldo -= valorSacado;
			return valorSacado;
		}

		return 0;
	}

	depositar(valor) {
		if (valor <= 0) return; // early return

		this._saldo += valor;
		return valor;
	}

	transferir(valor, conta) {
		const valorSacado = this.sacar(valor);
		conta.depositar(valorSacado);
	}
}
