const prompt = require("prompt-sync")({ sigint: true });
console.log('=================')
console.log("KALKULATOR TABUNG")
console.log('=================')
let r = Number(prompt('jari-jari : '))
let t = Number(prompt('tinggi : '))
let luas = 4 * 3.14 * r * r;
let volume = 3.14 * r * r * t
console.log(`Luas     : ${luas} cm2
    Volume   : ${volume} cm3`)