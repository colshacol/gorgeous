"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleText = exports.isText = void 0;

var _prettier = _interopRequireDefault(require("prettier"));

var _micro = require("micro");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const {
  DEFAULT_CONFIG
} = require("../consts"); // NOTE: Not currently supported.
// TODO: Determine if 'text/plain' support is necessary and,
// if so, how to do it!


const isText = type => {
  return type === 'text/plain';
};

exports.isText = isText;

const handleText = async (req, res) => {
  return {
    pretty: _prettier.default.format((await (0, _micro.text)(req)), DEFAULT_CONFIG)
  };
};

exports.handleText = handleText;