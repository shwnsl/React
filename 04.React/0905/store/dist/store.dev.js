"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _counterSlice = _interopRequireDefault(require("../features/counter/counterSlice"));

var _userSlice = _interopRequireDefault(require("../features/user/userSlice"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var rootReducer = (0, _toolkit.combineReducers)({
  counter: _counterSlice["default"],
  user: _userSlice["default"]
});
var store = (0, _toolkit.configureStore)({
  reducer: rootReducer
});
var _default = store;
exports["default"] = _default;