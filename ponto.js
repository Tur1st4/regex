const text = '1,2,3,4,5,6,7,8,9,0'
const notas = '1.8,7.2,8.9,4.3,10.0'

console.log(text.match(/1.2/g)) // Representa 1 caractere entre 1 e 2 tem 1 virgula
console.log(text.match(/1..2/g)) // Representa 2 caracteres, por isso não tem
console.log(text.match(/1..,/g))
console.log(notas.match(/8../g))
console.log(notas.match(/.\../g))
