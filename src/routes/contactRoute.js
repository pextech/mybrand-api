import express from 'express';
import { contactPost, contactDelete, contactGet } from '../controllers/contactController';
import auth from '../auth/checkAuth';

const router = express.Router();

router.post('/messages/add', contactPost);
router.get('/messages', contactGet);
router.delete('/messages/delete/:id', auth, contactDelete);

export default router;
