const prompt = require("prompt-sync")({ sigint: true });
console.log('=================')
console.log("KALKULATOR PRISMA")
console.log('=================')
let a = Number(prompt('alas : '))
let t = Number(prompt('tinggi : '))
let s = Number(prompt('sisi : '))
let luas = (a * t) + (3 * s * t)
let volume = a * t
console.log(`Luas     : ${luas} cm2
    Volume   : ${volume} cm3`)