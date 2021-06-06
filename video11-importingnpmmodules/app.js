const validator = require('validator')
var email = 'abd@gmail.com'
console.log(validator.isEmail(email))
console.log(validator.isURL('www.google.co.in'))