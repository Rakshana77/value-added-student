import express from 'express';
import { createStudent, getStudent, editStudent, deleteStudent } from '../Controllers/studentcontroller.js';

const router = express.Router();

router.post('/students', createStudent);
router.get('/students', getStudent);
router.put('/students/:id', editStudent);
router.delete('/students/:id', deleteStudent);

export default router;
