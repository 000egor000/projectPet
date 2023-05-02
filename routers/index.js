const { Router } = require('express')

const {
  contactsModel,
  personalInformationModel,
  formValueModel,
} = require('../model/model.main')
const router = Router()
router.get('/', (req, res) => {
  res.render('main')
})
router.get('/contacts', contactsModel)

router.get('/personalInformation/:name', personalInformationModel)

router.post('/formValue', formValueModel)

router.use(function (req, res, next) {
  res.render('error')
})
module.exports = router
