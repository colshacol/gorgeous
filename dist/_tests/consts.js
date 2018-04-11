"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WITH_CONFIG = exports.WITHOUT_CONFIG = void 0;
const WITHOUT_CONFIG = {
  REQUEST: {
    headers: {
      'content-type': 'application/json'
    },
    code: "const playWithFire = \n\t(cat) => {\n\twhile(true) {\n\t\t\t\t\t\nconsole.log('it is true....')\n\t}\n}\n\nplayWithFire()",
    config: null
  },
  EXPECTED: "const playWithFire = (cat) => {\n\twhile (true) {\n\t\tconsole.log('it is true....')\n\t}\n}\n\nplayWithFire()\n"
};
exports.WITHOUT_CONFIG = WITHOUT_CONFIG;
const WITH_CONFIG = {
  REQUEST: {
    headers: {
      'content-type': 'application/json'
    },
    code: "const playWithFire = \n\t(cat) => {\n\twhile(true) {\n\t\t\t\t\t\nconsole.log('it is true....')\n\t}\n}\n\nplayWithFire()",
    config: {
      arrowParens: 'avoid'
    }
  },
  EXPECTED: "const playWithFire = cat => {\n\twhile (true) {\n\t\tconsole.log('it is true....')\n\t}\n}\n\nplayWithFire()\n"
};
exports.WITH_CONFIG = WITH_CONFIG;