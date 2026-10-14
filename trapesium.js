const prompt = require("prompt-sync")({ sigint: true });
console.log('====================')
console.log("KALKULATOR TRAPESIUM")
console.log('====================')
let a = Number(prompt('sisi a : '))
let b = Number(prompt('sisi b : '))
let t = Number(prompt('tinggi : '))
let luas = 0.5 * (a + b) * t
let keliling = a + b + 2 * Math.sqrt(Math.pow((b - a) / 2, 2) + Math.pow(t, 2))
console.log(`Luas     : ${luas} cm2
    Keliling : ${keliling} cm`)
