import mongoose from "mongoose";
import { Schema } from "mongoose";


const userSchema = new Schema({
    clerkUserId : {
        type : String,
        required : true,
        unique : true
    },
    username : {
        type : String,
        require : true,
        unique : true
    },

    email : {
        type : String,
        require : true,
        unique : true
    },

    img : {
        type : String,
    },

    savedPosts : {
        type : [String],
        default : []
    },

   
},  {timeseries : true})

export default mongoose.model("User", userSchema)