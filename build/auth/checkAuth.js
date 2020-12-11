"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var auth = function auth(req, res, next) {
  try {
    var token = req.headers.authorization.split(' ')[1];

    _jsonwebtoken["default"].verify(token, process.env.TOKEN);

    req.userData = token;
    next();
  } catch (_unused) {
    res.status(500).json({
      message: 'Auth failed'
    });
  }
};

var _default = auth;
exports["default"] = _default;