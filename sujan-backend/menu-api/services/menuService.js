//  services/menuService.js

let menu = [];

const getAllItems = () => menu;

const getItemById = (id) => menu.find(item => item.id == id);

const createItem = (item) => {
    item.id = menu.length ? menu[menu.length -1].id + 1 : 1;
    menu.push(item);
    return item;
};

const updateItem = (id, newItem) => {
    const index = menu.findIndex(item => item.id == id);
    if(index !== - 1){
        menu[index] = {...menu[index], ...newItem};
        return menu[index];
    }
    return null;
};

const deleteItem = (id) => {
    const index = menu.findIndex(item => item.id == id);
    if(index !== -1) {
        return menu.splice(index, 1)[0];
    }
    return null;
};

module.exports = {
    getAllItems,
    getItemById,
    createItem,
    updateItem,
    deleteItem
};