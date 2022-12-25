const unElement = document.querySelector("#username");
const mrElement = document.querySelector("#major");
const btElement = document.querySelector("form > button");

btElement.addEventListener('click', (n) => {
  n.preventDefault();
  
  let tby = document.querySelector('#tb > tbody');
  let trs = document.createElement('tr');

  let names = document.createElement('td');
  names.innerText = unElement.value;
  unElement.value = "";

  let majors = document.createElement('td');
  majors.innerText = mrElement.value;
  mrElement.value = "";

  trs.appendChild(names);
  trs.appendChild(majors);
  tby.appendChild(trs);
});