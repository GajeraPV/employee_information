const countriesService = require('../services/countries')

const getCountries = async (req, res) => {
    try {
        console.log("Enter into countries controller getCountries")
        const response = await countriesService.getCountries()
        console.log("exit from countries controller getCountries")
        res.send(response)
    } catch(error) {
        console.log("error while getCountries", error)
        res.send(error)
    }    
}

module.exports = {
    getCountries
}