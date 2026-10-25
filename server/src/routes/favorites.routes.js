const express = require('express');
const favoritesController = require('../controllers/favorites.controller');
const { requireAuth } = require('../middleware/auth');
const validate = require('../middleware/validate');
const {
  createFavoriteSchema,
  updateFavoriteSchema,
} = require('../utils/validationSchemas');

const router = express.Router();

// All favorites routes require authenticated user
router.use(requireAuth);

router.get('/', favoritesController.getFavorites);
router.post('/', validate(createFavoriteSchema), favoritesController.addFavorite);
router.patch('/:id', validate(updateFavoriteSchema), favoritesController.updateFavorite);
router.delete('/:id', favoritesController.deleteFavorite);

module.exports = router;
