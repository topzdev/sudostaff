exports.successResponse = function (res, msg, data) {
  var resData = {
    status: true,
    message: msg,
    data: data,
  };
  return res.status(200).json(resData);
};

exports.errorResponse = function (res, msg, data) {
  var data = {
    status: false,
    message: msg,
    data,
  };
  return res.status(500).json(data);
};

exports.notFoundResponse = function (res, msg) {
  var data = {
    status: false,
    message: msg,
  };
  return res.status(404).json(data);
};

exports.validationError = function (res, msg, data) {
  var resData = {
    status: false,
    message: msg,
    data: data,
  };
  return res.status(400).json(resData);
};

exports.unauthorizedResponse = function (res, msg) {
  var data = {
    status: false,
    message: msg,
  };
  return res.status(401).json(data);
};
