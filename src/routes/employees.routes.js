import { Router } from 'express'
import { getEmployes, createEmployees, updateEmployee, deleteEmployee, getEmployee } from '../controllers/employees.controller.js'

const router = Router()

router.get('/employees', getEmployes)
router.get('/employees/:id', getEmployee)
router.delete('/employees/:id', deleteEmployee)
router.put('/employees/:id', updateEmployee)
router.post('/employees', createEmployees)


export default router