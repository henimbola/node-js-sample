const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const multer = require('multer')

const app = express()
const upload = multer({ dest: 'tmp/' })
const pug = require('pug')

app.use(cors())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.set('views', './views/templates')
app.set('view engine', 'pug')

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.send('Vous êtes à l accueil');
});

app.get('/api/info/:name', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send({ info: `test ${req.params.name}` });
})

app.post("/upload_file", upload.single('file'), (req, res, next) => {
  res.send({ status: "success" })
})

// PUG
app.get("/pug_view", (req, res) => res.render('file-upload', {
  youAreUsingPug: true
}));

app.listen(8080);
