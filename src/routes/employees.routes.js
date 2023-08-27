import { Router } from "express";
import { createEmployees, updateEmployee, getEmployees, deleteEmployee } from "../controllers/employees.controller.js";

const router = Router()

router.get('/employees',getEmployees)
router.post('/employees/:id',createEmployees)
router.patch('/employees/:id',updateEmployee)
router.delete('/employees/:id',deleteEmployee)

export default router