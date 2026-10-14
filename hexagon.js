const prompt = require("prompt-sync")({ sigint: true });
console.log('==================')
console.log("KALKULATOR HEXAGON")
console.log('==================')
let s = Number(prompt('sisi : '))
let luas = (3 * Math.sqrt(3) * s * s) / 2
let keliling = 6 * s
console.log(`
    Luas     :${luas} cm2
    Keliling : ${keliling} cm`)