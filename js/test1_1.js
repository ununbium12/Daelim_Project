const numon = 4 + 10;
const numtw = 4 + "10";
const numtr = parseInt(10 + 0.5);
const numfo = "10" + 0.5;
const numfi = 10 + 0.5;
const numsx = parseFloat("10" + 0.5);

document.writeln(`① 4 + 10 = ` + numon + `<br>`);
document.writeln(`② 4 + "10" = ` + numtw + `<br>`);
document.writeln(`③ parseInt(10 + 0.5) = ` + numtr + `<br>`);
document.writeln(`④ "10" + 0.5 = ` + numfo + `<br>`);
document.writeln(`⑤ 10 + 0.5 = ` + numfi + `<br>`);
document.writeln(`⑥ parseFloat("10" + 0.5) = ` + numsx + `<br>`);