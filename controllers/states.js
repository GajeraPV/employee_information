const statesService = require('../services/states')

const getStates = async (req, res) => {
    try {
        console.log("Enter into states controller getStates")

        const response = await statesService.getStates(req.params.country_id)
        console.log("Exit from states controller getStates")

        res.send(response)
    } catch(error) {
        console.log("error while getStates", error)
    }    
}

module.exports = {
    getStates
}