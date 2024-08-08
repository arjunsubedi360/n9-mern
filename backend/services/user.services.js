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
    const { limit = 10, skip = 0, sort = {} } = pageMeta;

    const query = {};

    //Filter
    Object.keys(filters).forEach((key) => {
      query[key] = filters[key];
    });

    if (search) {
      const searchRegex = new RegExp(search, "i");
      query.$or = [{ name: searchRegex }, { email: searchRegex }];
    }

    const users = await User.find(query).sort(sort).limit(limit).skip(skip);

    return users;
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
