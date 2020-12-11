import express from 'express';
import { contactPost, contactDelete, contactGet } from '../controllers/contactController';
import auth from '../auth/checkAuth';

const router = express.Router();

router.post('/messages', contactPost);
router.get('/messages', auth, contactGet);
router.delete('/messages/:id', auth, contactDelete);

export default router;
