const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const path = require('path')

app.use(express.static(path.join(__dirname, 'src')));
app.use(express.static(path.join(__dirname, 'src', 'css')));
app.use(express.static(path.join(__dirname, 'src', 'js')));
app.use(express.static(path.join(__dirname, 'src', 'assets')));

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(PORT, () => {
  console.log(`Portfolio app listening at http://localhost:${PORT}`)
})