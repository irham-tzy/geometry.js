const prompt = require("prompt-sync")({ sigint: true });
console.log("================");
console.log("KALKULATOR LIMAS");
console.log("================");
let s = Number(prompt("alas : "));
let t = Number(prompt("tinggi : "));
let ts = Number(prompt("sisi : "));
let luas = s * s + 2 * s * ts;
let volume = (s * s * t) / 3;
console.log(`Luas     : ${luas} cm2
    Volume   : ${volume} cm3`)