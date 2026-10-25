const express = require('express');
const authController = require('../controllers/auth.controller');
const { requireAuth } = require('../middleware/auth');
const validate = require('../middleware/validate');
const { authLimiter } = require('../middleware/rateLimiter');
const {
  registerSchema,
  loginSchema,
  updateUnitsSchema,
} = require('../utils/validationSchemas');

const router = express.Router();

router.post(
  '/register',
  authLimiter,
  validate(registerSchema),
  authController.register
);

router.post(
  '/login',
  authLimiter,
  validate(loginSchema),
  authController.login
);

router.get('/me', requireAuth, authController.getMe);
router.patch(
  '/me',
  requireAuth,
  validate(updateUnitsSchema),
  authController.updateUnits
);

module.exports = router;
