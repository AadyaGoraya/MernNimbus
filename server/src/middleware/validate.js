const AppError = require('../utils/appError');

/**
 * Zod validation middleware wrapper
 * @param {import('zod').ZodSchema} schema
 */
const validate = (schema) => (req, res, next) => {
  try {
    const result = schema.safeParse({
      body: req.body,
      query: req.query,
      params: req.params,
    });

    if (!result.success) {
      const errorMessages = result.error.errors.map((err) => ({
        path: err.path.join('.').replace(/^(body|query|params)\./, ''),
        message: err.message,
      }));

      return next(
        new AppError('Validation failed', 400, errorMessages)
      );
    }

    // Merge parsed & coerced values back
    if (result.data.body) req.body = result.data.body;
    if (result.data.query) req.query = result.data.query;
    if (result.data.params) req.params = result.data.params;

    next();
  } catch (err) {
    next(err);
  }
};

module.exports = validate;
