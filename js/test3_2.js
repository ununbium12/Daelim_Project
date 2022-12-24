const numon = parseInt(prompt(`첫번째 숫자를 입력 하십시오.`));
const numto = parseInt(prompt(`두번째 숫자를 입력 하십시오.`));
const numtr = parseInt(prompt(`세번째 숫자를 입력 하십시오.`));
const numfr = parseInt(prompt(`네번째 숫자를 입력 하십시오.`));

function getGCD(n, m) {
  let max = n > m ? n : m;
  let GCD = 0;
  for (let i = 1; i <= max; i++) {
    if (n % i === 0 && m % i === 0) {
      GCD = i;
    }
  }
  return GCD;
}

console.log(`${numon}과 ${numto}의 최대공약수 : ${getGCD(numon, numto)}`);
console.log(`${numtr}과 ${numfr}의 최대공약수 : ${getGCD(numtr, numfr)}`);