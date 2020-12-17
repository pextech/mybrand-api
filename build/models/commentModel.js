"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var commentSchema = _mongoose["default"].Schema({
  name: {
    type: String,
    required: true,
    "default": 'Anoynmous'
  },
  message: {
    type: String,
    required: true
  },
  commentedAt: {
    type: Date,
    "default": Date.now
  }
});

var _default = _mongoose["default"].model('Comment', commentSchema);

exports["default"] = _default;