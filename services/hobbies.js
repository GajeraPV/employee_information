const dbModel = require('../models/hobbies')

const getHobbies = async () => {
    try {
        console.log("Enter into hobbies service")
        let response = await dbModel.find({})
        console.log("exit from hobbies service", response)
        return response
        return response
      } catch (error) {
        console.log('error while getHobbies', error)
        throw error
      }
}

module.exports = {
  getHobbies
}
