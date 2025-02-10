const sendResponse = (res, data, message = "Success") => {
  res.status(200).json({
    success: true,
    message,
    data,
  });
};

const sendError = (res, statusCode, errorMessage) => {
  const status =
    statusCode >= 400 && statusCode < 500 ? "Client Error" : "Server Error";
  res.status(statusCode).json({
    success: false,
    error: {
      status,
      message: errorMessage,
    },
  });
};

module.exports = {
  sendResponse,
  sendError,
};
