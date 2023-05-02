const { data, contacts } = require('../const')
const contactsModel = (req, res) => {
  res.render('contacts', { contacts })
}

const personalInformationModel = (req, res) => {
  const { name } = req.params

  res.render('personalInformation', { name, data })
}
const formValueModel = (req, res) => {
  const { name } = req.body

  if (name) res.redirect(`/personalInformation/${name}`)
  else res.redirect('/')
}

module.exports = { contactsModel, personalInformationModel, formValueModel }
