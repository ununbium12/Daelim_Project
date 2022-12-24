const clickbt = document.querySelector('#click');

const num = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

clickbt.onclick = () => {
  document.writeln(`<h1>배열</h1><br><span id="click">주어진 배열 : [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]</span><br><br>`);
  for (let i = 0; i < num.length; i++) {
    if (num[i] > 10) {
      document.writeln(`${num[i]}`);
    }
  }
}