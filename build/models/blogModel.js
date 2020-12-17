"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Schema = _mongoose["default"].Schema;
var blogSchema = new Schema({
  imageUrl: {
    type: String
  },
  imageId: {
    type: String
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  comments: [{
    type: Schema.Types.ObjectId,
    ref: 'Comment'
  }]
}, {
  timestamps: true
});

var Blog = _mongoose["default"].model('Blog', blogSchema);

var _default = Blog;
exports["default"] = _default;