import mongoose from "mongoose"
const userSchema = new mongoose.Schema({
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
        default: "student"
    }
});
const User = mongoose.models.users || mongoose.model("users", userSchema);
export default User;