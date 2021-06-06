var fs = require('fs')

fs.unlink('write.js',function(err){
    console.log('Deleted!')
})