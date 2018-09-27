"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


var MyModuleObject = function MyModuleObject() {
  var body = {
    anyValue: 80
  };

  body.addition = function (a, b) {
    return a + b;
  };

  return body;
};

exports.default = MyModuleObject;