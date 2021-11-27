const text = '1,2,3,4,5,6,7,8,9,a,b,c,d,e,f'
const regexNove = RegExp('9')
console.log('REGEXP')
console.log(regexNove.test(text))
console.log(regexNove.exec(text))

const regexLetras = /[a-f]/g
console.log('STRING')
console.log(text.match(regexLetras))
console.log(text.search(regexLetras)) // Primeiro index q achou a string
console.log(text.replace(regexLetras, 'achei'))
console.log(text.split(regexLetras))