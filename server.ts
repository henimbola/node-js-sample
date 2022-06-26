const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const multer = require('multer')

const app = express()

app.use(cors())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.send('Vous êtes à l accueil');
});

app.get('/name/:name', (req, res) => {
  res.render('templates/display-name.ejs', { name: req.params.name });
})

app.get('/api/info/:name', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send({ info: `test ${req.params.name}` });
})

// .use((req, res, next) => {
//   res.setHeader('Content-Type', 'text/plain');
//   res.status(404).send('404 !! Page not found.');
// });

const upload = multer({ dest: 'tmp/' })

app.post("/upload_file", upload.single('file'), (req, res, next) => {
  res.send({ status: "success" })
})

app.listen(8080);
