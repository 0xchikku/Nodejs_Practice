const yargs = require('yargs')
const notes = require('./notes')
const chalk = require('chalk')

//Code to add note
yargs.command({
    command: 'add',
    describe: 'Add a note!',
    //add has title,body of note
    builder:{
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'Body of the Note!',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title,argv.body)    
    }
})

debugger

//Code to remove note
yargs.command({
    command: 'remove',
    describe: 'Remove a note!',
    builder: {
        title:{
            describe: 'Title of the Note',
            demandOption: true,
            string: 'string',
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

//Code to edit note
yargs.command({
    command: 'edit',
    describe: 'edit a note!',
    handler(){
        console.log('Editing note!')
    }
})

//Code to view list
yargs.command({
    command: 'list',
    describe: 'To view list',
    handler(){
        notes.listNote()
    }
})

//Code to read 
yargs.command({
    command: 'read',
    describe: 'Read a note!',
    handler(argv){
        notes.readNote(argv.title)
    }
})

yargs.parse()

