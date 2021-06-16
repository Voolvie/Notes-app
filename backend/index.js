const express = require('express')
const app = express()
const { port } = require('./config')
const apiRouter = require('./routes/api')
const cors = require('cors')

//db
require('./db/mongoose')
//Content-type application.json
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
//routes
app.use(cors())
app.use('/api/', apiRouter)


// server
app.listen(port, () => {
    console.log('Server Up! Port: ' + port)
})