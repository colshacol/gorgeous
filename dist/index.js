"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _microCors = _interopRequireDefault(require("micro-cors"));

var _service = require("./service");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// NOTE: micro requires it to be the default export. I think...
const cors = (0, _microCors.default)({
  allowMethods: ['PUT', 'POST']
});

var _default = cors(_service.service);

exports.default = _default;