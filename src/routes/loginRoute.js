import express from 'express';
import userLogin from '../controllers/contactController';

const router = express.Router();

router.post('/login', userLogin);

export default router;
