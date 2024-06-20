//routes/menuRouter.js

const express = require('express');
const router = express.Router();
const menuController = require('../controllers/menuController');

router.get('/', menuController.getAllItems);
router.get('/', menuController.getItemById);
router.get('/', menuController.createItem);
router.get('/', menuController.createItem);
router.get('/', menuController.updateItem);
router.get('/', menuController.deleteItem);

module.exports = router;