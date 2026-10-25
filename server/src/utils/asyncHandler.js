/**
 * Async wrapper to catch unhandled promises and pass them to Express error handler
 * @param {Function} fn
 * @returns {Function} Express middleware function
 */
const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

module.exports = asyncHandler;
