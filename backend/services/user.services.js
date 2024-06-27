import User from "../models/User.js";
export const createSingleUser = async (payload) => {
  try {
    console.log({ payload });

    const data = await User.create(payload);
    return data;
  } catch (error) {
    return error;
  }
};
