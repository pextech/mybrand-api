Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

const _express = _interopRequireDefault(require('express'));

const _contactController = require('../controllers/contactController');

const _checkAuth = _interopRequireDefault(require('../auth/checkAuth'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

router.post('/messages/add', _contactController.contactPost);
router.get('/messages', _contactController.contactGet);
router.delete('/messages/delete/:id', _checkAuth.default, _contactController.contactDelete);
const _default = router;
exports.default = _default;
