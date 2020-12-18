Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.blogComment = exports.blogDelete = exports.BlogPatch = exports.blogDetail = exports.blogGet = exports.blogPost = void 0;

const _blogModel = _interopRequireDefault(require('../models/blogModel'));

const _commentModel = _interopRequireDefault(require('../models/commentModel'));

const _cloudinary = _interopRequireDefault(require('../util/cloudinary'));

require('path');

require('fs');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { const keys = Object.keys(object); if (Object.getOwnPropertySymbols) { let symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter((sym) => Object.getOwnPropertyDescriptor(object, sym).enumerable); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (let i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach((key) => { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach((key) => { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value, enumerable: true, configurable: true, writable: true,
    });
  } else { obj[key] = value; } return obj;
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var { value } = info; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) {
  return function () {
    const self = this; const
      args = arguments; return new Promise((resolve, reject) => { const gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'next', value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'throw', err); } _next(undefined); });
  };
}

const blogPost = /* #__PURE__ */(function () {
  const _ref = _asyncToGenerator(function* (req, res) {
    const blog = yield _blogModel.default.create(_objectSpread(_objectSpread({}, req.body), {}, {
      imageUrl: '',
      imageId: '',
    }));

    if (req.files) {
      const tmp = req.files.image.tempFilePath;
      const result = yield _cloudinary.default.upload(tmp, (_, result) => result);
      blog.imageUrl = result.url;
      blog.imageId = result.public_id;
      blog.save();
      return res.status(201).json({
        success: true,
        data: blog,
      });
    }
  });

  return function blogPost(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());

exports.blogPost = blogPost;

const blogGet = function blogGet(req, res) {
  _blogModel.default.find().sort({
    createdAt: -1,
  }).then((result) => {
    if (result.length > 0) {
      const response = {
        count: result.length,
        Blogs: result.map((doc) => ({
          _id: doc._id,
          blogImage: doc.blogImage,
          title: doc.title,
          description: doc.description,
          createdAt: doc.createdAt,
          comments: doc.comments,
          request: {
            type: 'GET',
            url: 'http://localhost:'.concat(process.env.PORT, '/blog/get/').concat(doc._id),
          },
        })),
      };
      res.status(200).json(response);
    } else {
      res.status(404).json({
        message: 'no blogs found',
      });
    }
  }).catch((err) => {
    res.status(500).json({
      error: err,
    });
  });
};

exports.blogGet = blogGet;

const blogDetail = function blogDetail(req, res) {
  const { id } = req.params;

  if (id) {
    _blogModel.default.findById({
      _id: id,
    }).then((response) => {
      console.log(response);
      res.status(200).json(response);
    }).catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
  } else {
    res.status(404).json({
      message: 'there is no blog with this id',
    });
  }
};

exports.blogDetail = blogDetail;

const BlogPatch = function BlogPatch(req, res) {
  const { id } = req.params;
  const newBlog = {
    blogImage: req.file.filename,
    title: req.body.title,
    description: req.body.description,
  };

  _blogModel.default.updateOne({
    _id: id,
  }, {
    $set: newBlog,
  }).then(() => {
    res.status(201).json({
      status: 201,
      message: 'blog post updated',
      blog: newBlog,
    });
  }).catch((err) => {
    res.status(500).json({
      error: err,
    });
  });
};

exports.BlogPatch = BlogPatch;

const blogDelete = function blogDelete(req, res) {
  const { id } = req.params;

  _blogModel.default.findByIdAndDelete({
    _id: id,
  }).then(() => {
    res.status(200).json({
      message: 'blog is deleted',
    });
  }).catch((err) => {
    res.status(500).json({
      error: err,
    });
  });
};

exports.blogDelete = blogDelete;

const blogComment = function blogComment(req, res) {
  const comments = new _commentModel.default({
    name: req.body.name,
    message: req.body.message,
  });
  comments.save();
  const { id } = req.params;

  _blogModel.default.find({
    _id: id,
  }, {
    comments,
  }).then((result) => {
    res.status(201).json({
      status: 201,
      message: 'comment is created',
      comments,
    });
    console.log(result);
  }).catch((err) => {
    res.status(500).json({
      error: err,
    });
  });
};

exports.blogComment = blogComment;
