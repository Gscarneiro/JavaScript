const str = "gabriel";

if (str.length > 10) {
	const primeiraLetra = str.charAt(0);
	const numeroMeio = str.length - 2;
	const ultimaLetra = str.charAt(str.length - 1);
	console.log(primeiraLetra + numeroMeio + ultimaLetra);
} else {
	console.log(str);
}
