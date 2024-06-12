//controllers/menuController.js

const menuService = require('../services/menuService.js');

const getAllItems = (req, res) => {
    res.json(menuService.getAllItems());
};
const getItemById = (req, res) => {
    const item = menuService.getItemById(req.params.id);
    if (item) {
        
    }
}