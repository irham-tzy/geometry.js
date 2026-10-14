const prompt = require("prompt-sync")({ sigint: true });
console.log('=========================')
console.log("KALKULATOR LIMAS SEGILIMA")
console.log('=========================')
let s = Number(prompt('sisi alas : '))
let t = Number(prompt('tinggi : '))
let luas = (5 * s * s) + (5 * s * Math.sqrt((s * s) + (4 * t * t)) / 2)
let volume = (5 * s * s * t) / 3
console.log(`
    Luas     :${luas} cm2
    Volume   : ${volume} cm3`)