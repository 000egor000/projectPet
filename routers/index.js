const { Router } = require('express')
const { data, contacts } = require('../const')
const router = Router()
router.get('/', (req, res) => {
  res.render('main')
})
router.get('/contacts', (req, res) => {
  res.render('contacts', { contacts })
})

router.get('/personalInformation/:name', (req, res) => {
  const { name } = req.params

  res.render('personalInformation', { name, data })
})

router.post('/formValue', (req, res) => {
  const { name } = req.body
  if (name) res.redirect(`/personalInformation/${name}`)
  else res.redirect('/')
})
router.use(function (req, res, next) {
  res.render('error')
})
module.exports = router
