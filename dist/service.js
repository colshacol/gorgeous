"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.service = void 0;

var _handleJSON = require("./utilities/handleJSON");

const service = async (req, res) => {
  const type = req.headers['content-type'];
  type == 'undefined' && (req.headers['content-type'] = 'application/json');
  return (0, _handleJSON.isJSON)(type) && (await (0, _handleJSON.handleJSON)(req, res));
};

exports.service = service;