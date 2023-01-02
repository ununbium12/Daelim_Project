const url = "https://reqres.in/api/products/10"
const result = document.querySelector("#result");

let xhr = new XMLHttpRequest();
xhr.open('GET', url, true);
xhr.send();

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    let prodt = JSON.parse(xhr.responseText);
    console.log(prodt);
    result.innerHTML = `
      <p>상품명 : ${prodt.data.name}</p>
      <p>생산년도 : ${prodt.data.year}</p>
      `;
    }
  }