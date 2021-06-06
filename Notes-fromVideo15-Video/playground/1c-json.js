const fs = require('fs')


//load n parse json file
const dataBuffer = fs.readFileSync('1-json.json')
const data = dataBuffer.toString()
console.log(data)
var dataParsed = JSON.parse(data)
console.log(dataParsed)

//changing name and age 
dataParsed.name = 'Chikku'
dataParsed.age = 20

console.log(dataParsed)

//stringfying changed object 
const dataParsedStringfy = JSON.stringify(dataParsed)

console.log(dataParsedStringfy)

fs.writeFileSync('1c-json.json',dataParsedStringfy)