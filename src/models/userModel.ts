import mongoose from "mongoose"
import userInfo from "./userInfoModel"
const userSchema = new mongoose.Schema({
    ID : {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ["admin", "student", "staff"],
    },
});
const User = mongoose.models.users || mongoose.model("users", userSchema);
export default User;