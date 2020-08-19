import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
	static numeroDeContas = 0;
	constructor(cliente, agencia) {
		super(0, cliente, agencia); //super vai primeiro pra classe pai e depois faz a da filha
		ContaCorrente.numeroDeContas += 1;
	}

	//sobrescrita do metodo da classe pai
	sacar(valor) {
		let taxa = 1.1;
		return this._sacar(valor, taxa);
	}
}
