let num = 1000000000;
const nTimes = 9;

for (let i = 0; i < nTimes; i++) {
	if (num % 10 == 0) {
		num /= 10;
	} else {
		num -= 1;
	}
}
console.log(num);
