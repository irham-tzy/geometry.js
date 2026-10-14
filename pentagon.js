const prompt = require("prompt-sync")({ sigint: true });
console.log('===================')
console.log("KALKULATOR PENTAGON")
console.log('===================')
let s = Number(prompt('sisi : '))
let luas = (5 * s * s) / (4 * Math.tan(Math.PI / 5))
let keliling = 5 * s
console.log(`
    Luas     :${luas} cm2
    Keliling : ${keliling} cm`)