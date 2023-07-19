const dbModel = require('../models/states')

const getStates = async (country_id) => {
    try {
        console.log("Enter into states service")
        let response = await dbModel.find({country_id : country_id})
        console.log("exit from states service", response)
        return response
        return response
      } catch (error) {
        console.log('error while getStates', error)
        throw error
      }
}

module.exports = {
  getStates
}
