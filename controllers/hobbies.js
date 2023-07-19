const hobbiesService = require('../services/hobbies')

const getHobbies = async (req, res) => {
    try {
        console.log("Enter into hobbies controller getHobbies")
        const response = await hobbiesService.getHobbies()
        console.log("Exit from hobbies controller getHobbies")

        res.send(response)
    } catch(error) {
        console.log("error while getHobbies", error)
        res.send(error)

    }    
}

module.exports = {
    getHobbies
}