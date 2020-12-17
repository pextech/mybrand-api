/* eslint-disable no-console */
import express from 'express';
import path from 'path';
import {
  blogPost, blogGet, blogDetail, blogDelete, BlogPatch, blogComment,
}
  from '../controllers/blogController';
import auth from '../auth/checkAuth';

const router = express.Router();

router.post('/blog/add', auth, blogPost);
router.get('/blog/', blogGet);
router.get('/blog/get/:id', auth, blogDetail);
router.patch('/blog/update/:id', auth, BlogPatch);
router.delete('/blog/delete/:id', auth, blogDelete);
router.post('/blog/get/:id/comment', blogComment);

export default router;
