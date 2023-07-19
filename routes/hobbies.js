const router = require('express').Router()

const hobbiesController = require('../controllers/hobbies')

router.get('/get', hobbiesController.getHobbies)

module.exports = router