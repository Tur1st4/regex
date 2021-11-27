const text = '123456a.b c!d?e[f'
const text2 = 'João não vai passear na moto'
const regexPares = /[02468]/g
const regexComESemAssento = /n[aã]/g

console.log(text.match(regexPares))
console.log(text2.match(regexComESemAssento))