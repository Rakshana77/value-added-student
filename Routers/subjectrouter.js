import express from 'express';
import {createsubject,getsubject} from '../Controllers/subjectcontroller.js'
const router = express.Router();
router.post('/createsubjects',createsubject)
router.get('/getsubjects', getsubject)
export default router