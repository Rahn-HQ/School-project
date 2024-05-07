import mongoose from "mongoose"
const userSchema = new mongoose.Schema({
    Math : {
        type : Intl,
    },
    
    Physics : {
        type : Intl,
    },
    
    English : {
        type : Intl,
    },
    
    
    Science : {
        type : Intl,
    },

    
    Arabic : {
        type : Intl,
    },

    
    History : {
        type : Intl,
    },
    result :{
       type : String ,
       enum: ["success", "failed"],
    }
});
const User = mongoose.models.secondYear || mongoose.model("secondYear", userSchema);
export default User;