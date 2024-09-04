import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    sub : {
        type : String,
        required : true,
        unique : true,
    },
    name : {
        type : String,
        required: true,
    },
    image : {
        type : String,
        required: true,
    }
});

export const User = mongoose.model("user",userSchema);