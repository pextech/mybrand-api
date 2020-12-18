import express from 'express';
import { userLogin, registerPost } from '../controllers/userController';

const router = express.Router();

router.post('/login', userLogin);
router.post('/signUp', registerPost);

export default router;
