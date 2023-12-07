import mongoose from "mongoose"
const userSchema = new mongoose.Schema({
    ID: {
        type: String,
    },

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

    
    French : {
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
const User = mongoose.models.firstYear || mongoose.model("firstYear", userSchema);
export default User;