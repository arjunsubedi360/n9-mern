import { accountCreatedTemplate } from "../emailTemplates/accountCreated.js";
import { sendMail } from "../helper/sendEmail.js";
import User from "../models/User.js";
async function create(data) {
  const { name, email, role, password } = data;
  try {
    const data = await User.create({
      name,
      email,
      role,
      password,
    });
    sendMail({
      to: email,
      subject: "Account created",
      html: accountCreatedTemplate(name, email),
    });
    return data;
  } catch (error) {
    console.error("Error creating Users:", error.message);
    throw error;
  }
}

async function getSingleUser(id) {
  try {
    const user = await User.findById(id);
    if (!user) {
      console.log("User not found");
      return null;
    }
    return user;
  } catch (error) {
    console.error("Error retrieving User:", error.message);
    throw error;
  }
}

async function get({ email }) {
  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      console.log("User not found");
      return null;
    }
    return user;
  } catch (error) {
    console.error("Error retrieving User:", error.message);
    throw error;
  }
}

async function getAll(pageMeta, filters = {}, search = "") {
  try {
    const { limit = 10, page = 1, sort = {} } = pageMeta;
 
    const skip = (page - 1) * limit;
    const query = {};
    
    // Apply filters
    Object.keys(filters).forEach((key) => {
      query[key] = filters[key];
    });

    // Apply search
    if (search) {
      const searchRegex = new RegExp(search, "i");
      query.$or = [{ name: searchRegex }, { email: searchRegex }];
    }

    // Get total count of documents matching the query
    const total = await User.countDocuments(query);
    const hasNextPage = page * limit < total;

    // Fetch paginated data
    const users = await User.find(query)
      .sort(sort)
      .limit(limit)
      .skip(skip);

    return {
      data: users,
      pagination: {
        total,
        hasNextPage,
        currentPage: page,
        totalPages: Math.ceil(total / limit),
      },
    };
  } catch (error) {
    console.error("Error retrieving User:", error.message);
    throw error;
  }
}


async function update(id, data) {
  try {
    const usrdata = data;
    return await User.updateOne({ _id: id }, data);
  } catch (error) {
    throw error;
  }
}
async function dlt(id) {
  try {
    return await User.deleteOne({ _id: id });
  } catch (error) {
    throw error;
  }
}

export { create, get, getSingleUser, getAll, update, dlt };
