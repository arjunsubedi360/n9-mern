import Table from "../models/Table.js";
// create, createMany, updateOne, updateMany, deleteOne, deleteMany, findOne, find()
export const createSingleTable = async (payload) => {
  try {
    console.log({ payload });

    const data = await Table.create(payload);
    return data;
  } catch (error) {
    return error;
  }
};

export const getSingleTable = async ({ slug }) => {
  try {
    const data = await Table.findOne({ slug });
    return data;
  } catch (error) {
    return error;
  }
};

export const updateSingleTable = async (slug, input) => {
  try {
    const { name, slug: inputSlug } = input;
    console.log(slug, input);
    const data = await Table.updateOne(
      { slug: slug },
      { name: name, slug: inputSlug, updatedAt: new Date() }
    );
    return data;
  } catch (error) {
    return error;
  }
};


export const deleteSingleTable = async (slugValue) => {
  try {
    const data = await Table.deleteOne(slugValue);
    return data;
  } catch (error) {
    return error;
  }
};

