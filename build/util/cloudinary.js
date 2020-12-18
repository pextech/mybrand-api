Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

const _dotenv = require('dotenv');

const _cloudinary = require('cloudinary');

(0, _dotenv.config)();

_cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const _default = _cloudinary.v2.uploader;
exports.default = _default;
