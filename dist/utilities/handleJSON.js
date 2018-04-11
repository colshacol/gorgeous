"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleJSON = exports.isJSON = void 0;

var _prettier = _interopRequireDefault(require("prettier"));

var _micro = require("micro");

var _mergedConfig = require("./mergedConfig");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const isJSON = type => {
  return type === 'application/json';
};

exports.isJSON = isJSON;

const handleJSON = async (req, res) => {
  const {
    code,
    config
  } = await (0, _micro.json)(req);
  console.log({
    code,
    config
  }); // TODO: body validation.

  return {
    pretty: _prettier.default.format(code, (0, _mergedConfig.mergedConfig)(config)),
    error: null
  };
};

exports.handleJSON = handleJSON;