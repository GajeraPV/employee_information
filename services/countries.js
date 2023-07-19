const dbModel = require('../models/countries')

const getCountries = async () => {
    try {
        console.log("Enter into countries service")
        let response = await dbModel.find({})
        console.log("exit from countries service", response)
        return response
        return response
      } catch (error) {
        console.log('error while getCountries', error)
        throw error
      }
}

module.exports = {
    getCountries
}
