const prompt = require("prompt-sync")({ sigint: true });
console.log('========================')
console.log("KALKULATOR BELAH KETUPAT")
console.log('========================')
let d1 = Number(prompt('diagonal 1 : '))
let d2 = Number(prompt('diagonal 2 : '))
let s = Number(prompt('sisi : '))
let luas = 0.5 * d1 * d2
let keliling = 4 * s
console.log(`Luas     : ${luas} cm2
    Keliling : ${keliling} cm`)