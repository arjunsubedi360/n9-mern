import menu from "../models/menu.js";
export const createSingleMenu = async (input) => {
    try {
        const data = await menu.create(input);
        return data;
    } catch (error) {
        console.error("An error occurred while creating a single menu item:", error);
    
        throw error; 
    }
};
