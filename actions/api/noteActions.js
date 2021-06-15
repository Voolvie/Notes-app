const Note = require('../../db/models/note')

class noteActions {
    saveNote(req, res)  {
        
        const newNote = new Note({
             title: 'Zrobic zakupy testowy',
              body: 'mleko ser'
            })
        
        newNote.save().then(() => {
            console.log('Notatka zapisana')
        })

    res.send('Strona glowna')
    }
    getAllNotes(req,res) {
        //pobieranie
        res.send('Api dziala')
    }
    getNote(req,res) {
        //pobieranie
        res.send('Info o notatce')
    }
    saveNote(req,res) {
        const title = req.body.title
        const body = req.body.body
        //pobieranie
        res.send('Notatka stworzona. Tytul :' + title + ' Tresc:'+ body)
    }
    updateNote(req,res) {
        //pobieranie
        res.send('Notatka zaktualizowana')
    }
    deleteNote(req,res) {
        const id = req.params.id
        //pobieranie
        res.send('Notatka usunieta. ID: ' + id )
    }    
}

module.exports = new noteActions();