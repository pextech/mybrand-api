import express from 'express';
import { subscribeGet, subscribePost, SubscribeDelete } from '../controllers/subscribeController';
import auth from '../auth/checkAuth';

const router = express.Router();

router.post('/subscribe', subscribePost);
router.get('/subscribe', auth, subscribeGet);
router.delete('/subscribe/:id', auth, SubscribeDelete);

export default router;
