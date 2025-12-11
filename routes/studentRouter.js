import express from 'express';
import {getStudents, addStudents, editStudents, deleteStudents} from '../controllers/studentController.js';

const router = express.Router();

router.get('/get-user', getStudents);
router.post('/add-user', addStudents);
router.put('/edit-user', editStudents);
router.delete('/delete-user', deleteStudents);

export default router;