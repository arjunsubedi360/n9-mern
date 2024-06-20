import Menu from "../models/menu.js";

export const createSingleMenu = async (payload) => {
    try{
        console.log({payload});

        const data = await Menu.create(payload);
        return data;
    } catch (error) {
        return error;
    }
};

export const getSingleMenu = async ({slug}) => {
    try {
        const data = await Menu.findOne({slug});
        return data;
    } catch (error) {
        return overwriteMiddlewareResult;
    }
};

export const updateSingleMenu = async (slug, input) => {
    try {
        const {name, slug: inputSlug} = input;
        console.log(slug, input);
        const data = await Menu.updateOne(
            {slug: slug},
            {name: name, slug: inputSlug, updatedAt: new DataTransfer() }
        );
        return data;

    } catch (error) {
        return error;
    }
};