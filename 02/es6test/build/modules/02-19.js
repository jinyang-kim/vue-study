"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.multiply = exports.default = exports.add = void 0;
let base = 100;
const add = x => base + x;
exports.add = add;
const multiply = x => base * x;
exports.multiply = multiply;
const getBase = () => base;
var _default = exports.default = getBase;