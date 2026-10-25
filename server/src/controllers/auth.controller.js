const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const AppError = require('../utils/appError');
const asyncHandler = require('../utils/asyncHandler');

/**
 * Sign 7-day JWT token
 */
const signToken = (id) => {
  return jwt.sign(
    { id },
    process.env.JWT_SECRET || 'nimbus_dev_secret_key_change_in_production_environment_12345',
    { expiresIn: '7d' }
  );
};

/**
 * POST /api/v1/auth/register
 */
const register = asyncHandler(async (req, res, next) => {
  const { username, email, password, units } = req.body;

  // Check if username or email already exists
  const existingUser = await User.findOne({
    $or: [{ email: email.toLowerCase() }, { username }],
  });

  if (existingUser) {
    if (existingUser.email === email.toLowerCase()) {
      return next(new AppError('An account with this email already exists.', 409));
    }
    return next(new AppError('This username is already taken.', 409));
  }

  // Hash password with bcrypt
  const salt = await bcrypt.genSalt(12);
  const passwordHash = await bcrypt.hash(password, salt);

  const newUser = await User.create({
    username,
    email: email.toLowerCase(),
    passwordHash,
    units: units || 'metric',
  });

  const token = signToken(newUser._id);

  res.status(201).json({
    success: true,
    data: {
      token,
      user: {
        id: newUser._id,
        username: newUser.username,
        email: newUser.email,
        units: newUser.units,
        createdAt: newUser.createdAt,
      },
    },
    error: null,
  });
});

/**
 * POST /api/v1/auth/login
 */
const login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email: email.toLowerCase() }).select('+passwordHash');
  if (!user) {
    return next(new AppError('Invalid email or password.', 401));
  }

  const isMatch = await bcrypt.compare(password, user.passwordHash);
  if (!isMatch) {
    return next(new AppError('Invalid email or password.', 401));
  }

  const token = signToken(user._id);

  res.status(200).json({
    success: true,
    data: {
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        units: user.units,
        createdAt: user.createdAt,
      },
    },
    error: null,
  });
});

/**
 * GET /api/v1/auth/me
 */
const getMe = asyncHandler(async (req, res) => {
  res.status(200).json({
    success: true,
    data: {
      user: {
        id: req.user._id,
        username: req.user.username,
        email: req.user.email,
        units: req.user.units,
        createdAt: req.user.createdAt,
      },
    },
    error: null,
  });
});

/**
 * PATCH /api/v1/auth/me (updates units: metric | imperial)
 */
const updateUnits = asyncHandler(async (req, res, next) => {
  const { units } = req.body;

  req.user.units = units;
  await req.user.save();

  res.status(200).json({
    success: true,
    data: {
      user: {
        id: req.user._id,
        username: req.user.username,
        email: req.user.email,
        units: req.user.units,
        createdAt: req.user.createdAt,
      },
    },
    error: null,
  });
});

module.exports = {
  register,
  login,
  getMe,
  updateUnits,
};
