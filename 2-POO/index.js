import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Carneiro", 10000, 1234567890);
diretor.cadastrarSenha("123456@abc");
const gerente = new Gerente("Lari", 5000, 12345698);
gerente.cadastrarSenha("231311");
const estaLogado = SistemaAutenticacao.login(diretor, "123456@abc");

console.log(estaLogado);
