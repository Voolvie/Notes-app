const express = require('express')
const router = express.Router()

const noteActions = require('../actions/api/noteActions')

//POBIERANIE
router.get('/notes', noteActions.getAllNotes)
//POBIERANIE KONKRETNEJ
router.get('/notes/:id', noteActions.getNote)
//ZAPISYWANIE
router.post('/notes', noteActions.saveNote)
//EDYTOWANIE
router.patch('/notes/:id', noteActions.updateNote)
//USUWANEIE
router.delete('/notes/:id', noteActions.deleteNote)


module.exports = router;