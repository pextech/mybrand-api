Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.contactDelete = exports.contactGet = exports.contactPost = void 0;

const _contactModel = _interopRequireDefault(require('../models/contactModel'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-underscore-dangle */
const contactPost = function contactPost(req, res) {
  const contact = new _contactModel.default({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    message: req.body.message,
  });
  contact.save().then((result) => {
    res.status(201).json({
      status: 201,
      message: 'message is created',
      data: contact,
    }); // eslint-disable-next-line no-console

    console.log(result);
  }).catch((err) => {
    res.status(500).json({
      error: err,
    });
  });
};

exports.contactPost = contactPost;

const contactGet = function contactGet(req, res) {
  _contactModel.default.find().sort({
    createdAt: -1,
  }).then((result) => {
    const messages = {
      count: result.length,
      messages: result.map((doc) => ({
        id: doc._id,
        name: doc.name,
        email: doc.email,
        phone: doc.phone,
        message: doc.message,
      })),
    };
    res.status(200).json({
      status: 200,
      data: messages,
    });
  }).catch((err) => {
    res.status(500).json({
      error: err,
    });
  });
};

exports.contactGet = contactGet;

const contactDelete = function contactDelete(req, res) {
  const { id } = req.params;

  _contactModel.default.findByIdAndDelete(id).then(() => {
    res.status(200).json({
      message: 'deleted message',
    });
  }).catch((err) => {
    res.status(500).json({
      error: err,
    });
  });
};

exports.contactDelete = contactDelete;
