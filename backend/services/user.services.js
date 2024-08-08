import { accountCreatedTemplate } from "../emailTemplates/accountCreated.js";
import { sendMail } from "../helpers/sendEmail.js";
import User from "../models/User.js";
import bcrypt from "bcryptjs";

const createUser = async (input) => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(input.password, salt);
  input.password = hash;
  const user = await User.create(input);
  const emailContent = accountCreatedTemplate(input.name, input.email);
  sendMail({
    to: input.email,
    subject: "Account Created Successfully",
    html: emailContent,
  });
  return user;
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
