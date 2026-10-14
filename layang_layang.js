const prompt = require("prompt-sync")({ sigint: true });
console.log('========================')
console.log("KALKULATOR LAYANG-LAYANG")
console.log('========================')
let d1 = Number(prompt('diagonal 1 : '))
let d2 = Number(prompt('diagonal 2 : '))
let s1 = Number(prompt('sisi 1 : '))
let s2 = Number(prompt('sisi 2 : '))
let luas = (d1 * d2) / 2
let keliling = 2 * s1 + 2 * s2
console.log(`Luas     : ${luas} cm2
    Keliling : ${keliling} cm`)