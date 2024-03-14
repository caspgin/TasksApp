// eslint-disable-next-line no-unused-vars
function errorHandler(err, req, res, next) {
  const errorStatus = err.status || 500;
  const errorMsg = err.message || "Something went wrong";
  res.status(errorStatus).json({
    success: false,
    message: errorMsg,
    stack: process.env.NODE_ENV === "development" ? err.stack : {},
  });
}
export default errorHandler;
