Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

const _jsonwebtoken = _interopRequireDefault(require('jsonwebtoken'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const auth = function auth(req, res, next) {
  try {
    const token = req.headers.authorization.split(' ')[1];

    _jsonwebtoken.default.verify(token, process.env.TOKEN);

    req.userData = token;
    next();
  } catch (_unused) {
    res.status(500).json({
      message: 'Auth failed',
    });
  }
};

const _default = auth;
exports.default = _default;
