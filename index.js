const express = require('express')

const router = require('./routers/index.js')
const app = express()
app.use(express.static('public'))
app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: false }))
app.use(router)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Сервер запущен на порту ${PORT}`))
