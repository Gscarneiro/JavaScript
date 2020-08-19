import { Conta } from "./2-POO/Conta.js";

export class ContaPoupanca extends Conta {
	constructor(saldoInicial, cliente, agencia) {
		super(saldoInicial, cliente, agencia);
	}

	sacar(valor) {
		const taxa = 1.02;
		this._sacar(valor, taxa);
	}
}
