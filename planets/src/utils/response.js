module.exports = (res, statusCode, data, message) => {
  const message_ = message ? message : "OK";
  res.status(statusCode).json({
    error: false,
    message: "Planet Service: " + message_,
    data,
  });
};
