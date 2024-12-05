
const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

// Routes for CRUD operations
router.get('/', itemController.getAllItems);
router.post('/add', itemController.addItem);
router.post('/edit', itemController.editItem);
router.get('/delete/:id', itemController.deleteItem);

module.exports = router;
