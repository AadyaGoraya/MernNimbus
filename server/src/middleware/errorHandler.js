/**
 * Central Error Handler for NIMBUS
 * Enforces standard API envelope: { success, data, error }
 */
const errorHandler = (err, req, res, next) => {
  let statusCode = err.statusCode || 500;
  let message = err.message || 'Internal Server Error';
  let details = err.details || null;

  // Handle Mongoose duplicate key errors (code 11000)
  if (err.code === 11000) {
    statusCode = 409;
    const field = Object.keys(err.keyValue || {})[0] || 'field';
    if (field === 'user' || (err.keyValue && err.keyValue.lat !== undefined)) {
      message = 'This city is already in your favorites.';
    } else {
      message = `An account with this ${field} already exists.`;
    }
  }

  // Handle Mongoose ValidationError
  if (err.name === 'ValidationError') {
    statusCode = 400;
    message = Object.values(err.errors)
      .map((el) => el.message)
      .join(', ');
  }

  // Handle Mongoose CastError (invalid ObjectId, etc.)
  if (err.name === 'CastError') {
    statusCode = 400;
    message = `Invalid format for field: ${err.path}`;
  }

  // Handle JWT errors
  if (err.name === 'JsonWebTokenError') {
    statusCode = 401;
    message = 'Invalid authentication token. Please log in again.';
  }
  if (err.name === 'TokenExpiredError') {
    statusCode = 401;
    message = 'Authentication token expired. Please log in again.';
  }

  // Don't leak stack traces in production
  const responsePayload = {
    success: false,
    data: null,
    error: {
      message,
      ...(details ? { details } : {}),
      ...(process.env.NODE_ENV === 'development' && statusCode === 500
        ? { stack: err.stack }
        : {}),
    },
  };

  res.status(statusCode).json(responsePayload);
};

module.exports = errorHandler;
