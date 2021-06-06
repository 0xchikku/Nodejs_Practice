const fs = require('fs')
const chalk = require('chalk')
const yargs = require('yargs')

const addNote = (title,body) => {
    console.log(chalk.green.inverse('Adding Note....'))
    const notes = loadNotes()
    //const duplicatNotes = notes.filter( (note) => note.title === title)
    const duplicateNote = notes.find( (note) => note.title === title)
    if(!duplicateNote){
            notes.push({
                title: title,
                body: body
            })    
    saveNotes(notes)
    console.log(chalk.green.inverse('New Note Added!'))
    }
    else{
        console.log(chalk.red.inverse('Exists!'))
    }


}

const saveNotes = (notes) => { 
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        const parsedData = JSON.parse(dataJSON)
        return parsedData
    } catch (error) {
        return []
    }
    
}


const removeNote = (title) => {
    console.log('Removing....' + title)   
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)
    saveNotes(notesToKeep)   
    if(notesToKeep.length < notes.length){
        
        console.log(chalk.green.inverse('Success'))    
    }else{
        console.log(chalk.red.inverse('Not Found!'))
    }   
}

const listNote = () => {
    console.log(chalk.inverse('Your notes..'))
    const notes = loadNotes()
    return(notes.forEach(element => console.log(element.title)))
}

const readNote = (title) => {
    const notes = loadNotes()
    const search = notes.filter( (note) => note.title === title)
    const read = search.find( (note) => console.log(note.body))
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNote: listNote,
    readNote: readNote,
}
