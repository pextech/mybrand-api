import express from 'express';

import contactPost from '../controllers/contactController';

const router = express.Router();

router.post('/', contactPost);

export default router;
