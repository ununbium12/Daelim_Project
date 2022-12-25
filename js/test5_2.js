const buttonElement = document.querySelector('button');
const navElement = document.querySelector('nav');

buttonElement.onclick = ('click', () => {
  navElement.classList.toggle('active');
  buttonElement.classList.toggle('active');
});