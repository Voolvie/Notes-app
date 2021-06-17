import axios from 'axios'

const instance = axios.create({
    baseURL: process.env.API_URL || 'http://localhost:3001/api',
    notesURL: process.env.NOTES_URL || 'http://localhost:3000/notes'
})

export default instance