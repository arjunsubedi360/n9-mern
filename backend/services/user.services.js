import User from "../models/user.model.js";
async function create(data) {
    const { name, email, password, role } = data;

    if (!name || !email || !password || !role) {
        throw new Error('Name, email, password, and role are required.');
    }
    const newUser = new User({ name, email, password, role });
    try {
        await newUser.save();
        console.log('Users created with ID:', newUser._id);
        return newUser._id;
    } catch (error) {
        console.error('Error creating Users:', error.message);
        throw error;
    }
}

async function get() {

    try {
        const user = await User.find({});
        if (!user) {
            console.log('User not found');
            return null;
        }
        console.log('User retrieved:', user);
        return user;
    } catch (error) {
        console.error('Error retrieving User:', error.message);
        throw error;
    }
}

export { create, get };
