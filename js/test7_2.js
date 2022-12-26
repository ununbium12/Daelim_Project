const sdElement = document.querySelector("#seed");
const tlElement = document.querySelector("#total");
const rfElement = document.querySelector("#raffle");
const rsElement = document.querySelector("#result");

rfElement.addEventListener('click', (n) => {
  n.preventDefault();
  let winner = "";

  for(let i = 0; i < tlElement.value; i++) {
    let pick = Math.floor((Math.random() * sdElement.value) + 1);
    winner += `${pick}번, `;
  }
  
  rsElement.innerText = `당첨자 : ${winner}`;
  rsElement.classList.add("show");
})