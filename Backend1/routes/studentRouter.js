// import express from 'express';
// import {getStudents, addStudents, editStudents, deleteStudents} from '../controllers/studentController.js';

// const router = express.Router();

// router.get('/get-user', getStudents);
// router.post('/add-user', addStudents);
// router.put('/edit-user', editStudents);
// router.delete('/delete-user', deleteStudents);

// export default router;


import express from 'express'; 
const router = express.Router();
import {getStudentsDetails,addStudents, getStudentById, getStudentByConditions, updateStudents, deleteStudents} from '../controllers/studentController.js';

router.get('/get-students', getStudentsDetails);
router.post('/add-students', addStudents);
router.get('/get-student-by-id/:id', getStudentById);
router.get('/get-students-by-condition', getStudentByConditions);
// router.put('/update-students/:id', updateStudents)
router.put('/update-students/', updateStudents)
// router.put('/Delete-students/:id', deleteStudents)
router.put('/Delete-students', deleteStudents)

export default router;