const router = require('express').Router()

const employeeController = require('../controllers/employee')

router.get('/get', employeeController.getAllEmployee)
router.get('/get/:employee_id', employeeController.getEmployeeById)
router.post('/add', employeeController.addEmployee)
router.post('/update', employeeController.updateEmployee)
router.delete('/delete/:employee_id', employeeController.deleteEmployee)

module.exports = router