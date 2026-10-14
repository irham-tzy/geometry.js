const prompt = require("prompt-sync")({ sigint: true });
console.log('==========================')
console.log("KALKULATOR PERSEGI PANJANG")
console.log('==========================')
let p =Number(prompt('panjang : '))
let l =Number(prompt('lebar : '))
let luas = p * l
let keliling = 2 * ( p + l )
console.log(`
    Luas     :${luas} cm2
    Keliling : ${keliling} cm`)
