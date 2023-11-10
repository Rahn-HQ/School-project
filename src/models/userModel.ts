import { Model, models, model } from "mongoose";
import { Document, Schema } from "mongoose";
import bcryptjs from "bcryptjs";
interface UserDocument extends Document {
    email: string,
    username: string,
    password: string,
    role: "amdin" | "student" | "staff",
}
interface Methods {
    comparePassword(password: string): Promise<boolean>;
}
const userSchema = new Schema<UserDocument, {}, Methods>({
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
//Hash the password before saving
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    try {
        const salt = await bcryptjs.genSalt(10);
        this.password = await bcryptjs.hash(this.password, salt);
        next();
    }
    catch (err) {
        throw err;
    }
});
//Compare Password 
userSchema.methods.comparePassword = async function (password) {
    try {
        return await bcryptjs.compare(password, this.password);
    } catch (err) {
        throw err;
    }
};
const UserModel = models.User || model("User" , userSchema);
export default UserModel as Model<UserDocument , {} , Methods >;