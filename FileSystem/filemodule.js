var fs = require('fs')
const { Console } = require('console')

fs.writeFile('write.js', 'console.log("Hello");', function(err){
console.log('File name id Write.js')
})

fs.appendFile('write.js','console.log("Append")',function(err){
    console.log('Appended')
})

fs.readFile('write.js','utf8',function(err,data){
    console.log(data)
})

 