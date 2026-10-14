const prompt = require("prompt-sync")({ sigint: true });
console.log('================')
console.log("KALKULATOR BALOK")
console.log('================')
let p = Number(prompt('panjang : '))
let l = Number(prompt('lebar : '))
let t = Number(prompt('tinggi : '))
let luas = 2 * (p * l + p * t + l * t)
let volume = p * l * t
console.log(`Luas     : ${luas} cm2
    Volume   : ${volume} cm3`)