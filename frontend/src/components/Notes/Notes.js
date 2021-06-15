import React from 'react'
import './Notes.css'
import Note from './Note/Note'

class Notes extends React.Component {
    constructor(props) {
        super(props)
        this.notes = [
            {
                id: '2323',
                title: 'Wykapac psa',
                body: 'pamietaj wykapac psa'
            },
            {
                id: '4444',
                title: 'Zrobic zakupy',
                body: 'mleko ser smietana'  
            }
        ]
    }
    render() {
        
        return(
        <div>
            <p>Moje notatki:</p>

             {this.notes.map(note => (
                    <Note
                    title={note.title}
                    body={note.body}
                    id={note.id} />
             ))}
            


        </div>
        )
    }
}

export default Notes