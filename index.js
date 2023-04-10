const express = require('express')
const { data, contacts } = require('./const.js')
const app = express()
app.use(express.static('public'))
app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.render('main')
})
app.get('/contacts', (req, res) => {
  res.render('contacts', { contacts })
})

app.get('/personalInformation/:name', (req, res) => {
  const { name } = req.params

  res.render('personalInformation', { name, data })
})

app.post('/formValue', (req, res) => {
  const { name } = req.body
  if (name) res.redirect(`/personalInformation/${name}`)
  else res.redirect('/')
})
app.use(function (req, res, next) {
  res.render('error')
})

const PORT = 3000
app.listen(PORT, () => console.log(`Сервер запущен на порту ${PORT}`))
