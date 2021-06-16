import React from 'react'
import './Notes.css'
import Note from './Note/Note'
import NewNote from './NewNote/NewNote'
import Modal from 'react-modal'
import EditNote from './EditNote/EditNote'
import axios from '../../axios'
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';



class Notes extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            notes: [
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
            ],
            showEditModal: false,
            editNote: {}  
        }

    }

    componentDidMount() {
        this.fetchNotes()
    }

    async fetchNotes() {
       const res = await axios.get('/notes')
       const notes = res.data
       
       this.setState({ notes })  
    }

    async addNote(note) {
        try {
            const notes = [...this.state.notes]
        //dodaj na backend
       const res = await axios.post('/notes', note)
       const newNote = res.data
        //dodaj na fronte
        notes.push(newNote)
        this.setState({notes})
        } catch(err) {
            NotificationManager.error('Uzupełnij wszystkie pola')
        }
    }

    async editNote(note) {
        //modyfikuj backjend
        await axios.patch('/notes/' + note._id, note)
        //modyfikuj frontend
        const notes = [...this.state.notes]
        const index = notes.findIndex(x => x._id === note._id)
        if (index >= 0) {
            notes[index] = note
            this.setState({notes})
        }

        this.toggleModal()
        
    }

    async deleteNote(_id) {
        const notes = [...this.state.notes].filter(note => note._id !== _id)
        await axios.delete('http://localhost:3001/api/notes/' + _id)
        this.setState({ notes })
    }

    toggleModal() {
        this.setState({ showEditModal: !this.state.showEditModal})
    }

    editNoteHandler(note) {
        this.toggleModal()
        this.setState({ editNote: note })
    }

    render() {
        
        return(
        <div>
            <NotificationContainer />

            <p>Moje notatki:</p>

            <NewNote
            onAdd={(note) => this.addNote(note)}
            />

            <Modal isOpen={this.state.showEditModal}
            ariaHideApp={false}
            contentLabel="Edytuj notatke">
            <EditNote
            title={this.state.editNote.title}
            body={this.state.editNote.body}
            _id={this.state.editNote._id}
            onEdit={note => this.editNote(note)}
            />
            <button onClick={() => this.toggleModal()}>Anuluj</button>
            </Modal>
             {this.state.notes.map(note => (
                    <Note
                    key={note._id}
                    title={note.title}
                    body={note.body}
                    _id={note._id}
                    onEdit={(note) => this.editNoteHandler(note)}
                    onDelete={(_id) => this.deleteNote(_id)} />
             ))}
            


        </div>
        )
    }
}

export default Notes