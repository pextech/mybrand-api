import express from 'express';
import registerPost from '../controllers/registerController';

const router = express.Router();

router.post('/signUp', registerPost);

export default router;
