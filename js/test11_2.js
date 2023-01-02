const urNumElement = document.querySelector("#usernum");
const btElement = document.querySelector("button");

btElement.addEventListener("click", () => {
  let n = urNumElement.value;
  try {
    if (n === "" || isNaN(n)) {
      throw "숫자를 입력하세요.";
    }
    n = Number(n);
    if (n <= 10) {
      document.querySelector("#result").innerText = n;
    }
    if (n > 10) {
      throw "10보다 작은 수를 입력하세요.";
    }    
  } catch (err) {
    alert(err);
  } finally {
    urNumElement.value = "";
  }
});