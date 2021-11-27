// . ? * + - ^ $ | [ ] { } \ :
const text = '1,2,3,4,5,6,a.b c!d?e'
const regexPonto = /\./g
const regexSimbolos = /,|\.|\?|!| /g


console.log(text.split(regexPonto))
console.log(text.match(regexSimbolos))