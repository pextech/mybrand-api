import path from 'path';
import multer from 'multer';

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
    fileSize: 1024 * 1024 * 30,
  },

});

export default upload;
