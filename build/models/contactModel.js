Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

const _mongoose = _interopRequireDefault(require('mongoose'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const { Schema } = _mongoose.default;
const contactSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

const Contact = _mongoose.default.model('Contact', contactSchema);

const _default = Contact;
exports.default = _default;
