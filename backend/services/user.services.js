import User from "../models/User.js";
async function create(data) {
  const { name, email, role } = data;
  try {
    const saveUser = User.create({
      name,
      email,
      role,
    });
    if (saveUser) {
      return saveUser;
    }
  } catch (error) {
    console.error("Error creating Users:", error.message);
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

async function getAll(pageMeta) {
  try {
    const { limit } = pageMeta;
    const users = await User.find({}).limit(limit || 10);
    // .sort({})
    // .limit(limit)
    // .skip(skip);

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
    const usrid = id;
    return await User.deleteOne({ id });
  } catch (error) {
    throw error;
  }
}

export { create, get, getAll, update, dlt };
