const {
  successResponse,
  errorResponse,
  notFoundResponse,
  unauthorizedResponse,
  validationError,
} = require("./httpResponse");

exports.validateResponse = function (response, { data, msg, status }) {
  if (status === 200) {
    return successResponse(response, msg, data);
  } else if (status === 400) {
    return validationError(response, msg, data);
  } else if (status === 401) {
    return unauthorizedResponse(response, msg);
  } else if (status === 404) {
    return notFoundResponse(response, msg);
  } else if (status === 500) {
    console.log("ERROR: ", data);
    return errorResponse(response, msg, data);
  }
};
