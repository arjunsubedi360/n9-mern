import {request, response} from "express";
import { HttpStatusEnum } from "../enums/status-enum.js";

import {
    createSingleMenu,
    getSingleMenu,
    updateSingleMenu,
    deleteSingleMenu
} from "../services/menu.services.js";
import { slugify } from "../utils/slugify.js";
import { lang, responseData } from "../utils/responseData.js";

export const createMenu = async (request, response) => {
    try {
        const input = request.body;
        const slug = slugify(input.name);

        const menuExists = await getSingleMenu({slug});
        console.log(menuExists);
        if(menuExists) {
            throw new Error("Menu already exists");
        }
        const data = await createSingleMenu({...input, slug});

        console.log(data);
        responseData({
            data,
            message: lang.CREATE("Menu"),
            statusCode: HttpStatusEnum.CREATED,
            response,
        });
    } catch (error) {
        responseData({
            data: null,
            message: error.message.
            response,
            statusCode: HttpStatusEnum.BAD_REQUEST,
        });
    }

};

export const getMenu = async (request, response) => {
    try{
        const slug = request.params.slug;
        if(!slug) {
            throw new Error("Slug doest not exists");
        }
        const data = await getSingleMenu({slug});
        responseData({
            data: data,
            message: lang.GET("Menu"),
            response,
            statusCode: HttpStatusEnum.OK,
        });
    } catch (error) {
        return error.message;
    }
};

export const updateMenu = async (request, response) => {
    try{
        let data;
        const slugValue = request.params.slug;
        const input = request.body;

        const payload = {
            ...input,
            slug: slugify(input.name),
        };

        const menuExists = await getSingleMenu({slug: slugValue});
        if(!menuExists) {
            throw new Error("Menu doest not exists");
        }
        const updatedData = await updateSingleMenu(slugValue, playload);

        if(updatedData.modifiedCount === 1) {
            data = await getSingleMenu({slug: payload.slug});
        }

        responseData({
            response,
            data: data,
            message: lang.UPDATE("Menu"),
            response,
            statusCode: HttpStatusEnum.OK,
        });
    } catch (error) {
        responseData({
            response,
            data: data,
            message: error.message,
            statusCode: HttpStatusEnum.BAD_REQUEST,     
        });
    }
};

export const deleteMenu = async (req, res) => {
    const id = request.params.id;
    const data = await deleteSingleMenu(id);
    responseData({
            data,
            message: lang.DELETE("Category"),
            statusCode: HttpStatusEnum.OK,
            response,
        });

};