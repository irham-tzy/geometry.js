const prompt = require("prompt-sync")({ sigint: true });
console.log('==================')
console.log("KALKULATOR KERUCUT")
console.log('==================')
let r = Number(prompt('jari-jari : '))
let t = Number(prompt('tinggi : '))
let s = Number(prompt('sisi : '))
let luas = 3.14 * r * (r + s)
let volume = (3.14 * r * r * t) / 3
console.log(`Luas     : ${luas} cm2
    Volume   : ${volume} cm3`)