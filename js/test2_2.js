let num = prompt(`1보다 큰 숫자를 입력 하십시오.`);
let sum = 0;

if (num === null) {
  alert("공백 값은 안됩니다.");
} else if (num < 1) {
  alert("1보다 큰 숫자만 입력 해주십시오.");
} else {
  for(let i = 1; i <= num; i++){
    if (i % 2 == 1) {
      continue;
    }
    sum += i;
    document.writeln(`${i} ----- ${sum}<br>`);
  } 
}