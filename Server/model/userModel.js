import { model, Schema } from "mongoose";

const UserSchema = new Schema({
    email: String,
    username: String,
    password: String,
    salt: String,
    createdUserDate: {
        type: String,
        default: () => new Date().toISOString(),
    }
})

const userModel = model('user', UserSchema);

export default userModel;