const dbModel = require('../models/employee')

const getEmployeeById = async (employee_id) => {
    try {
        console.log("Enter into employee service getEmployeeById")
        let response = await dbModel.find({_id : employee_id})
        console.log("exit from employee service getEmployeeById")
        return response
      } catch (error) {
        console.log('error while getEmployee', error)
        throw error
      }
}

const getAllEmployee = async () => {
    try {
        console.log("Enter into employee service getAllEmployee")
        let response = await dbModel.find({})
        console.log("exit from employee service getAllEmployee")
        return response
      } catch (error) {
        console.log('error while getAllEmployee', error)
        throw error
      }
}

const addEmployee = async (body) => {
    try {
        console.log("Enter into employee service addEmployee")
        let response = await dbModel.insertMany(body)
        console.log("exit from employee service addEmployee")
        return response
      } catch (error) {
        console.log('error while addEmployee', error)
        throw error
      }
}

const updateEmployee = async (body) => {
    try {
        console.log("Enter into employee service updateEmployee")
        let response = await dbModel.updateMany({_id : body._id}, body)
        console.log("exit from employee service updateEmployee")
        return response
      } catch (error) {
        console.log('error while updateEmployee', error)
        throw error
      }
}

const deleteEmployee = async (employee_id) => {
    try {
        console.log("Enter into employee service deleteEmployee")
        let response = await dbModel.deleteMany({_id : employee_id})
        console.log("exit from employee service deleteEmployee")
        return response
      } catch (error) {
        console.log('error while deleteEmployee', error)
        throw error
      }
}

module.exports = {
    getEmployeeById,
    getAllEmployee,
    addEmployee,
    updateEmployee,
    deleteEmployee
}
