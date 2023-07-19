const employeeService = require('../services/employee')

const getEmployeeById = async (req, res) => {
    try {
        console.log("Enter into employee controller getEmployeeById")
        const response = await employeeService.getEmployeeById(req.params.employee_id)
        console.log("Exit from employee controller getEmployeeById", response)
        res.send(response)
    } catch(error) {
        console.log("error while getEmployeeById", error)
        res.send(error)
    }    
}

const getAllEmployee = async (req, res) => {
    try {
        console.log("Enter into employee controller getAllEmployee")
        const response = await employeeService.getAllEmployee()
        console.log("Exit from employee controller getAllEmployee", response)

        res.send(response)
    } catch(error) {
        console.log("error while getAllEmployee", error)
        res.send(error)

    }    
}

const addEmployee = async (req, res) => {
    try {
        console.log("Enter into employee controller addEmployee")
        const response = await employeeService.addEmployee(req.body)
        console.log("Exit from employee controller addEmployee")

        res.send(response)
    } catch(error) {
        console.log("error while addEmployee", error)
        res.send(error)

    }    
}

const updateEmployee = async (req, res) => {
    try {
        console.log("Enter into employee controller updateEmployee")
        const response = await employeeService.updateEmployee(req.body)
        console.log("Exit from employee controller updateEmployee")

        res.send(response)
    } catch(error) {
        console.log("error while updateEmployee", error)
        res.send(error)

    }    
}

const deleteEmployee = async (req, res) => {
    try {
        console.log("Enter into employee controller deleteEmployee")
        const response = await employeeService.deleteEmployee(req.params.employee_id)
        console.log("Exit from employee controller deleteEmployee")

        res.send(response)
    } catch(error) {
        console.log("error while deleteEmployee", error)
        res.send(error)

    }    
}

module.exports = {
    getEmployeeById,
    getAllEmployee,
    addEmployee,
    updateEmployee,
    deleteEmployee
}