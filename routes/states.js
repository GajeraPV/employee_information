const router = require('express').Router()

const statesController = require('../controllers/states')

router.get('/get/:country_id', statesController.getStates)

module.exports = router