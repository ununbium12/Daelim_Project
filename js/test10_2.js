const btElement = document.querySelector('button');
const rsElement= document.querySelector('#result');

const Num = {
  digitCount: 6,
  maxNumber: 45,
};

btElement.addEventListener('click', () => { 
  let { digitCount, maxNumber } = Num;
  let myNum = new Set();
  for (let i = 0; i < digitCount; i++) {
    myNum.add(Math.floor(Math.random() * maxNumber) + 1);
  }
  rsElement.innerText = `${[...myNum]}`;
});