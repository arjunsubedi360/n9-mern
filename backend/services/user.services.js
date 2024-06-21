import User from "../models/user.model.js";
async function create(data) {
    const { name, email, role } = data;
    try {
        const saveUser = User.create({
            name,
            email,
            role
        })
       if(saveUser){
        return saveUser
       }
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
async function update(id,data) {
    try {
        const usrdata = data
        return await User.updateOne({ _id: id }, data);
    } catch (error) {
        throw error;
    }
}
async function dlt(id) {
    try {
       const usrid = id
       return await User.deleteOne({id});
    } catch (error) {
        throw error;
    }
}

export { create, get ,update ,dlt };
