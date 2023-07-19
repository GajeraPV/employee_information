'use strict'

const countriesRoutes = require('./countries')
const statesRoutes = require('./states')
const hobbiesRoutes = require('./hobbies')
const employeesRoutes = require('./employess')

module.exports = function (app) {
  app.use('/api/v1/employee', employeesRoutes)
  app.use('/api/v1/countries', countriesRoutes)
  app.use('/api/v1/states', statesRoutes)
  app.use('/api/v1/hobbies', hobbiesRoutes)
}
