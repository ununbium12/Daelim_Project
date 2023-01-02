const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(40, 100);
ctx.lineTo(210, 100);
ctx.lineTo(80, 250);
ctx.lineTo(130, 30);
ctx.lineTo(180, 250);
ctx.lineTo(40, 100);
ctx.closePath();
ctx.stroke();