const prompt = require("prompt-sync")({ sigint: true });
console.log('========================')
console.log("KALKULATOR JAJAR GENJANG")
console.log('========================')
let a = Number(prompt('sisi a : '))
let t = Number(prompt('tinggi : '))
let luas = a * t
let keliling = 2 * a + 2 * t
console.log(`Luas     : ${luas} cm2
    Keliling : ${keliling} cm`)