const prompt = require("prompt-sync")({ sigint: true });
console.log('==========================')
console.log("KALKULATOR PRISMA SEGITIGA")
console.log('==========================')
let a =Number(prompt('sisi alas : '))
let t =Number(prompt('tinggi : '))
let s =Number(prompt('sisi miring : '))
let luas = (a * t) + (2 * a * s)
let volume = 0.5 * a * t * s
console.log(`
    Luas     :${luas} cm2
    Volume   : ${volume} cm3`)