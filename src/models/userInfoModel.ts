import mongoose from "mongoose"
const userSchema = new mongoose.Schema({
    ID: {
        type: String,
    },
    year:{
        type : String,
    },
    classNum:{
        type : String,
    },
    result :{
       type : String ,
       enum: ["success", "failed", "inQueue"],
       default: "inQueue"
    }
});
const User = mongoose.models.userInfo || mongoose.model("userInfo", userSchema);
export default User;