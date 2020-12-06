Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

require('dotenv/config');

const _express = _interopRequireDefault(require('express'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
app.use(_express.default.json());
app.get('/', (req, res) => res.status(200).send({
  message: 'YAY! Congratulations! Your first endpoint is working',
}));
app.listen(process.env.PORT, () => 'app running on port '.concat(process.env.PORT));
const _default = app;
exports.default = _default;
