Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

const _mongoose = _interopRequireDefault(require('mongoose'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const { Schema } = _mongoose.default;
const blogSchema = new Schema({
  imageUrl: {
    type: String,
  },
  imageId: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  comments: [{
    type: Schema.Types.ObjectId,
    ref: 'Comment',
  }],
}, {
  timestamps: true,
});

const Blog = _mongoose.default.model('Blog', blogSchema);

const _default = Blog;
exports.default = _default;
