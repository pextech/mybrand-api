Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

const _express = _interopRequireDefault(require('express'));

require('dotenv/config');

const _expressFileupload = _interopRequireDefault(require('express-fileupload'));

const _mongoose = _interopRequireDefault(require('mongoose'));

const _blogRoute = _interopRequireDefault(require('./routes/blogRoute'));

const _contactRoute = _interopRequireDefault(require('./routes/contactRoute'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
const URI = 'mongodb+srv://'.concat(process.env.DB_USER, ':').concat(process.env.DB_PASSWORD, '@cluster0.fyxsl.mongodb.net/mybrand?retryWrites=true&w=majority');

_mongoose.default.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  app.listen(process.env.PORT || 5000);
});

app.use(_express.default.json());
app.use(_express.default.json({
  extended: false,
}));
app.use((0, _expressFileupload.default)({
  useTempFiles: true,
})); // eslint-disable-next-line consistent-return

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type,Accept,Authorization');

  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT,POST,PATCH,DELETE');
    return res.status(200).json({});
  }

  next();
});
app.use('/', _blogRoute.default);
app.use('/', _contactRoute.default);
app.use((req, res) => {
  const error = new Error('Page Not found');
  res.status(404).json({
    error: {
      message: error.message,
    },
  });
});
const _default = app;
exports.default = _default;
