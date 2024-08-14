import { accountCreatedTemplate } from "../emailTemplates/accountCreated.js";
import { registerUserTemplate } from "../emailTemplates/registerUser.js";
import { sendMail } from "../helpers/sendEmail.js";
import User from "../models/User.js";

const createUser = async (input) => {
  const user = await User.create(input);
  const emailContent = accountCreatedTemplate(input.name, input.email);
  sendMail({
    to: input.email,
    subject: "Account Created Successfully",
    html: emailContent,
  });
  return user;
};
const registerUser = async (input) =>{
  const user = await User.create(input);
  const emailContent = registerUserTemplate(input.name, input.email);
  sendMail({
    to: input.email,
    subject: "Account Registered Successfully",
    html: emailContent,
  })
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

const deleteUsers = async () => {
  return await User.deleteMany();
};

export {
  registerUser,
  createUser,
  updateUser,
  getUser,
  getUsers,
  deleteUser,
  getUserByEmail,
  deleteUsers
};
