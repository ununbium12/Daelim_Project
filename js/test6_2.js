const nbElement = document.querySelector("#noti-box");
const btElement = document.querySelector("button");

btElement.addEventListener('click', () => {
  const noti = document.createElement('div');
  noti.classList.add('noti');
  noti.innerText = "띠롱 메세지가 왔습니다.";
  nbElement.appendChild(noti);
  
  setTimeout(() => {
    noti.remove();
  }, 3000); // 1초 = 1000
});