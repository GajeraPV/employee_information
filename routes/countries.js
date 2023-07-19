const router = require('express').Router()

const countriesController = require('../controllers/countries')

router.get('/get', countriesController.getCountries)

module.exports = router