const {
  successResponse,
  successResponseWithData,
  errorResponse,
  notFoundResponse,
  validationErrorWithData,
  unauthorizedResponse,
} = require("./httpResponse");

exports.validateResponse = function (response, { data, msg, status }) {
  if (status === "200") {
    if (data) return successResponseWithData(response, msg, data);
    return successResponse(response, msg);
  } else if (status === "400") {
    return validationErrorWithData(response, msg, data);
  } else if (status === "401") {
    return unauthorizedResponse(response, msg);
  } else if (status === "404") {
    return notFoundResponse(response, msg);
  } else if (status === "500") {
    return errorResponse(response, msg);
  }
};
