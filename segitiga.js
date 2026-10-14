const prompt = require("prompt-sync")({ sigint: true });
console.log('===================')
console.log("KALKULATOR SEGITIGA")
console.log('===================')
let a = Number(prompt('alas : '))
let t = Number(prompt('tinggi : '))
let luas = 0.5 * a * t
let keliling = a + t + Math.sqrt(a * a + t * t)
console.log(`Luas     : ${luas} cm2
    Luas     :${luas} cm2
    Keliling : ${keliling} cm`)