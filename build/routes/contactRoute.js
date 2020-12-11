Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

const _express = _interopRequireDefault(require('express'));

const _contactController = _interopRequireDefault(require('../controllers/contactController'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

router.post('/', _contactController.default);
const _default = router;
exports.default = _default;
