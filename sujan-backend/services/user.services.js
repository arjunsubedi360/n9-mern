import { users } from "../models/index.js"

export const getUsersList = () => {
   return users;
}


export const createSingleUser = ({user}) => {
    users.push(user)
    return users;
}

