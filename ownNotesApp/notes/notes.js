
const yargs = require('yargs')
const chalk = require('chalk')
const fs = require('fs')
const { title } = require('process')


//to add note 
const addNote = (title,body) => {
    console.log(chalk.yellow.inverse('Adding Note...' ))
    console.log('Title: ' + chalk.red(title))
    console.log('Body: ' + chalk.blueBright(body))
    const notes = loadNote()
    const duplicateNote = notes.filter( (note) => note.title === title)
    if(duplicateNote.length === 0){
        notes.push({
            title: title,
            body: body
        })
        console.log(chalk.green.inverse('Notes saved'))
        saveNote(notes)   
    }
    else{
        console.log(chalk.red.inverse('Exist!'))
    }
   // console.log(duplicateNote)
   // console.log(notes)
    

}

//save notes
const saveNote = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

//load notes 
const loadNote = () => {
    try {
        const databuffer = fs.readFileSync('notes.json')
        const data = databuffer.toString()
        return JSON.parse(data)
    } catch (error) {
        return []
    }
}

//to remove note
const removeNote = (title) => {
    console.log(chalk.red.inverse('Removing note...'))
    const notes = loadNote()
    const noteToKeep = notes.filter( (note) => note.title!==title)
    saveNote(noteToKeep)
    console.log(noteToKeep)
    if(noteToKeep.length < notes.length){
        //saveNote(noteToKeep)
        //fs.writeFileSync('notes.json',noteToKeep)
        console.log(chalk.green.inverse('Removed!'))
    }else{
        console.log(chalk.red.inverse('Not Found!'))
    }
}

//To view list
const listNote = () => {
    console.log(chalk.inverse('List...'))
    const notes = loadNote()
    return notes.forEach(note => console.log(note.title));
}

//to read note
const readNote = (title) => {
    console.log(chalk.blue.inverse('Reading note... ' + title))
    const notes = loadNote()
    const view = notes.filter( (view) => view.title === title)
    //console.log(view.body)
    //const read = view.find( (note) => console.log(note.body))
    if(view.find( (note) => note.title === title)){
        return (view.find( (note) => console.log(note.body)))
    }
    else{
        console.log('Not Found!')
    }
    
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNote: listNote,
    readNote: readNote,
}