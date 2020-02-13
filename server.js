
const express = require('express')
const app = express()
const cors = require('cors')
const multer  = require('multer')
const bodyParser = require('body-parser')
const port = 3000

app.use(cors())
app.use(bodyParser.json())

const MIME_TYPES = {
   'image/png' : 'png',
   'image/jpeg' : 'jpg',
   'image/jpg' : 'jpg'
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/tmp/multer');
    console.log('destination');
  },
  filename: function (req, file, cb) {
     let fname = 'upload'+ '-' + Date.now() + '.' + MIME_TYPES[file.mimetype]
    cb(null, fname)
    console.log('filename');
  }
})

let upload =multer({storage : storage}).single('image')
app.get('/', (req, res) => {
   res.send('Welcome');
});
app.post('/',upload, (req, res, next) => {
   console.log(req.body);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
