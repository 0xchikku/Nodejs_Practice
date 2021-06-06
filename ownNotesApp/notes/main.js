const notes = require('./notes')
const yargs = require('yargs')
const chalk = require('chalk')

//To add note
yargs.command({
    command: 'add',
    describe: 'To add note!',
    builder: {
        title: {
            describe: 'Title of note!',
            demandOption: true,
            type: 'string',
        },
        body: {
            describe: 'Body of note!',
            type: 'string',
        },
    },
    handler(argv) {
        notes.addNote(argv.title,argv.body)
    }
})

//to remove note
yargs.command({
    command: 'remove',
    describe: 'To remove note!',
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

//to view list
yargs.command({
    command: 'list',
    describe: 'To view list!',
    handler() {
        notes.listNote()
    }
})

//To read note
yargs.command({
    command: 'read',
    describe: 'To read note!',
    handler(argv) {
        notes.readNote(argv.title,argv.body)
    }
})


yargs.parse()