/* eslint-disable no-console */
import express from 'express';
import path from 'path';
import multer from 'multer';
import {
  blogPost, blogGet, blogDetail, blogDelete, BlogPatch, blogComment,
}
  from '../controllers/blogController';
import auth from '../auth/checkAuth';

const router = express.Router();

const storage = multer.diskStorage({

  destination(req, file, cb) {
    cb(null, path.join(__dirname, '../uploads'));
  },

  filename(req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg' || file.mimetype === 'image/PNG') {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
    }
    return 'file filter done';
  },
  limits: {
    fileSize: 1024 * 1024 * 3,
  },

});

router.post('/blog/add', auth, upload.single('blogImage'), blogPost);
router.get('/blog/', blogGet);
router.get('/blog/get/:id', auth, blogDetail);
router.patch('/blog/update/:id', auth, upload.single('blogImage'), BlogPatch);
router.delete('/blog/delete/:id', auth, blogDelete);
router.post('/blog/get/:id/comment', blogComment);

export default router;
