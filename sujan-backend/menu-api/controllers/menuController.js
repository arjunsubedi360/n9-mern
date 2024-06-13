//controllers/menuController.js

const menuService = require('../services/menuService.js');

const getAllItems = (req, res) => {
    res.json(menuService.getAllItems());
};
const getItemById = (req, res) => {
    const item = menuService.getItemById(req.params.id);
    if (item) {
        res.json(item);
    }else {
        res.status(404).json({message: 'Item not found'});
    }
};

const createItem = (req, res)=> {
    const newItem = menuService.createItem(req.body);
    res.status(201).json(newItem);
};

const updateItem = (req, res)=> {
    const updatedItem = menuService.updateItem(req.params.id, req.body
    );

    if(updateItem) {
        res.json(updateItem);
    } else {
        res.status(404).json({message: 'Item not found'});
    }
};

const deleteItem = (req, res) => {
    const deleteItem = menuService.deleteItem(req.params.id);
    if(deleteItem) {
        res.json(deleteItem);
    } else {
        res.status(404).json({message: 'Item not found'});
    }
};

module.exports = {
    getAllItems,
    getItemById,
    createItem,
    updateItem,
    deleteItem
};