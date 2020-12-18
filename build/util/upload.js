Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

const _path = _interopRequireDefault(require('path'));

const _multer = _interopRequireDefault(require('multer'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const storage = _multer.default.diskStorage({
  destination: function destination(req, file, cb) {
    cb(null, _path.default.join(__dirname, '../uploads'));
  },
  filename: function filename(req, file, cb) {
    cb(null, Date.now() + _path.default.extname(file.originalname));
  },
});

const upload = (0, _multer.default)({
  storage,
  fileFilter: function fileFilter(req, file, cb) {
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
const _default = upload;
exports.default = _default;
