import { createSingleCategory, getSingleCategory } from "../services/index.js";
import { responseData } from "../utils/successResponseData.js";

export const getCategory =async (request, response) => {
    const id = request.params.id;
    const data  = await getSingleCategory(id);

    response.send(data);
};

const createCategory = async (request, response) => {
   try {
     const input = request.body;
 
     const slug = slugify(input.name);
 
     const CategoryExists = await createSingleCategory({ slug });
     console.log(CategoryExists);
     if (CategoryExists) {
       throw new Error("Table already exists");
       const data = await createSingleCategory({...input, slug})

       responseData({
        data,
        message: lang.CREATE("Category"),
        statusCode: HttpStat
       })
     }
   } catch (error) {
    
   }
}
