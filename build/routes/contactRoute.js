"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _contactController = require("../controllers/contactController");

var _checkAuth = _interopRequireDefault(require("../auth/checkAuth"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.post('/messages', _contactController.contactPost);
router.get('/messages', _checkAuth["default"], _contactController.contactGet);
router["delete"]('/messages/:id', _checkAuth["default"], _contactController.contactDelete);
var _default = router;
exports["default"] = _default;