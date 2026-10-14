const prompt = require("prompt-sync")({ sigint: true });
console.log('============================')
console.log("KALKULATOR SEGITIGA SIKUSIKU")
console.log('============================')
let a =Number(prompt('sisi a : '))
let b =Number(prompt('sisi b : '))
let luas = 0.5 * a * b
let keliling = a + b + Math.sqrt((a * a) + (b * b))
console.log(`
    Luas     :${luas} cm2
    Keliling : ${keliling} cm`)