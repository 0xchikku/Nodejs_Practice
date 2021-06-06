
var calc_add = require('./add.js')
var calc_subt = require('./subt.js')
var find_oddoreven = require('./oddneven.js')
var product = require('./multiple.js')

plus = calc_add.add(4,5)
minus = calc_subt.subt(6,3)
odd = find_oddoreven.OD(3)
even = find_oddoreven. OD(4)
multi = product.multi(4,5)


console.log('The result for addition is ' + plus)
console.log('The result for subtraction is ' + minus)
console.log('The Number is ' + odd)
console.log('The Number is ' + even)
console.log('The result for multiplication is ' + multi)
