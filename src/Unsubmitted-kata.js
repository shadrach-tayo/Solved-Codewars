// Numbers that are a power of their sum of digits

function isSumDig(dig) {
  let num = (''+dig)
  	.split('')
  	.reduce((a, b) => Number(a) + Number(b), 0);
  let pow = (''+dig).length;
  const result = Math.pow(num, pow);
  return dig == result;
}

function power_SumDigTerm(n) {
  const power = n;
  const sumDig = [];
  for(let i = 80; i; i++) {
    if(isSumDig(i)) sumDig.push(i);
    if(sumDig.length == n) return sumDig.pop();
  }
}

console.log(power_SumDigTerm(2));