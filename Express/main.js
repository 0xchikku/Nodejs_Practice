const express = require('express')
var local = require('http')

const app = express()

app.get('/home',function(req,res){
    res.send('HomePage')
})

app.get('/home/profile',function(req,res){
    res.send('Loading.....')
})

app.get('/home/profile/:id',function(req,res){
    const id = req.params.id
    switch(id){
        case 'ritesh':
            res.send('Ritesh Profile');
            break;
        case 'home':
            res.send('Ritesh Home')
            break
        default:
            res.send('Invalid!')
    }
})

app.listen(9000,function(req,res){
    console.log('Server Running..')
})