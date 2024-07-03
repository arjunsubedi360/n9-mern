import User from "../models/User.js";

const createUser = async (input) => {
  return await User.create(input);
};

const updateUser = async (id, input) => {
  return await User.updateOne({ _id: id }, input);
};

const getUser = async (id) => {
  return await User.findOne({ _id: id });
};

const getUserByEmail = async (email) => {
  return await User.findOne({ email: email });
};

const getUsers = async (pageMeta) => {
  const { skip, limit } = pageMeta;
  const totalCount = await User.countDocuments();

  const data = await User.find({}) /// {name: "arjun subedi"
    .skip(skip || 0)
    .limit(limit || 10)
    .sort({ updatedAt: "descending" }); // {asc, ascending, 1 } {-1, desc, descending}

  return {
    data,
    pagination: {
      totalCount,
      hasNextPage: skip + limit < totalCount,
    },
  };
};

const deleteUser = async (id) => {
  return await User.deleteOne({ _id: id });
};
export {
  createUser,
  updateUser,
  getUser,
  getUsers,
  deleteUser,
  getUserByEmail,
};
