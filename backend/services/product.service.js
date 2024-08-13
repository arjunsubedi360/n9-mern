import Product from "../models/Product.js";

const createProduct = async (input) => {
  const product = await Product.create(input);
  return Product.findOne({ _id: product._id }).populate({
    path: "categoryId",
    select: "slug",
  });
  //https://mongoosejs.com/docs/populate.html
};
export { createProduct };
