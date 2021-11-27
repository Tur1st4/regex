const text = '.$+-*?_'

console.log(text.match(/[+.?*$]/g))
console.log(text.match(/[$-?]/g))
console.log(text.match(/[$\-?]/g))
console.log(text.match(/[-?]/g))