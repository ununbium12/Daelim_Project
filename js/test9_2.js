const origin = document.querySelector("#origin");
const result = document.querySelector("#result");

let numbers = [2, 4, 6, 8, 10];

const tail = arr => (arr.length > 1 ? arr.slice(1) : arr);

origin.innerText = numbers;
result.innerText = tail(numbers);