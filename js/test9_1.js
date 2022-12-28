const ogElement = document.querySelector("#origin");
const rsElement = document.querySelector("#result");

let num = [2, 4, 6, 8, 10];
showArray(ogElement, num);

let sum = 0;
for(let i = 0; i < num.length; i++) {
  sum += num[i];
}
num.push(sum);
showArray(rsElement, num);

function showArray(area, arr) {
  let str;
  str = "<table><tr>";
  for (let i = 0; i < arr.length; i++) {
    str +=  "<td>" + arr[i] + "</td>";
  }
  str += "</tr></table>";
  area.innerHTML = str;
}