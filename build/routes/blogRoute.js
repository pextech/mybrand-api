Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

const _express = _interopRequireDefault(require('express'));

const _path = _interopRequireDefault(require('path'));

const _blogController = require('../controllers/blogController');

const _checkAuth = _interopRequireDefault(require('../auth/checkAuth'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-console */
const router = _express.default.Router();

router.post('/blog/add', _checkAuth.default, _blogController.blogPost);
router.get('/blog/', _blogController.blogGet);
router.get('/blog/get/:id', _checkAuth.default, _blogController.blogDetail);
router.patch('/blog/update/:id', _checkAuth.default, _blogController.BlogPatch);
router.delete('/blog/delete/:id', _checkAuth.default, _blogController.blogDelete);
router.post('/blog/get/:id/comment', _blogController.blogComment);
const _default = router;
exports.default = _default;
