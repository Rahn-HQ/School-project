import mongoose from "mongoose"
const userSchema = new mongoose.Schema({
    ID: {
        type: String,
    },

    Analysis : {
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

    
    Algebra : {
        type : Intl,
    },
    result :{
       type : String ,
       enum: ["success", "failed"],
    }
});
const User = mongoose.models.thirdYear || mongoose.model("thirdYear", userSchema);
export default User;