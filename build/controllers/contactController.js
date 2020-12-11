Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

const _contactModel = _interopRequireDefault(require('../models/contactModel'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const contactPost = function contactPost(req, res) {
  const contact = new _contactModel.default({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    message: req.body.message,
  });
  contact.save().then((result) => {
    res.status(201).json({
      message: 'sent successfuly',
    }); // eslint-disable-next-line no-console

    console.log(result);
  }).catch((err) => {
    res.status(500).json({
      error: err,
    });
  });
};

const _default = contactPost;
exports.default = _default;
