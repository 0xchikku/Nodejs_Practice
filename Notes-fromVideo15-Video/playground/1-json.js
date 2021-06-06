const fs = require('fs')



const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)
console.log(data)
console.log('Title: ' + data.title)
console.log('Author: ' + data.authors)