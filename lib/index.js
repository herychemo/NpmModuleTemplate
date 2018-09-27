

const MyModuleObject = function () {
  const body = {
    anyValue: 80,
  };

  body.addition = function (a, b) {
    return a + b;
  };

  return body;
};

export default MyModuleObject;
