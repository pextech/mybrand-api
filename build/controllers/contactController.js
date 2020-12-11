"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.contactDelete = exports.contactGet = exports.contactPost = void 0;

var _contactModel = _interopRequireDefault(require("../models/contactModel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable no-underscore-dangle */
var contactPost = function contactPost(req, res) {
  var contact = new _contactModel["default"]({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    message: req.body.message
  });
  contact.save().then(function (result) {
    res.status(201).json({
      status: 201,
      message: 'message is created',
      data: contact
    }); // eslint-disable-next-line no-console

    console.log(result);
  })["catch"](function (err) {
    res.status(500).json({
      error: err
    });
  });
};

exports.contactPost = contactPost;

var contactGet = function contactGet(req, res) {
  _contactModel["default"].find().sort({
    createdAt: -1
  }).then(function (result) {
    var messages = {
      count: result.length,
      messages: result.map(function (doc) {
        return {
          id: doc._id,
          name: doc.name,
          email: doc.email,
          phone: doc.phone,
          message: doc.message
        };
      })
    };
    res.status(200).json({
      status: 200,
      data: messages
    });
  })["catch"](function (err) {
    res.status(500).json({
      error: err
    });
  });
};

exports.contactGet = contactGet;

var contactDelete = function contactDelete(req, res) {
  var id = req.params.id;

  _contactModel["default"].findByIdAndDelete(id).then(function () {
    res.status(200).json({
      message: 'deleted message'
    });
  })["catch"](function (err) {
    res.status(500).json({
      error: err
    });
  });
};

exports.contactDelete = contactDelete;