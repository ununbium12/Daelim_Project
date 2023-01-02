const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");

let jett = new Image();
jett.onload = function() {
  ctx.drawImage(jett, 0, 0, canvas.width, canvas.height);
}
jett.src = "img/jett.jpg";

ctx.beginPath();
ctx.ellipse(250, 200, 200, 200, 0, 0, 2 * Math.PI);
ctx.clip();