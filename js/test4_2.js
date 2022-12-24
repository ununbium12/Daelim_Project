const n = document.querySelector("#numon");
const m = document.querySelector("#numto");
const button = document.querySelector("button");
let result = document.querySelector("#rv");

button.onclick = function() {
  result.innerText = getGCD(n.value, m.value);
}

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

