import mongoose from "mongoose";
import { User } from "./user.js";

const noteSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    desc: {
        type: String,
        required: true,
        trim: true,
    },
    image: {
        type: String,
        required: false,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true,
    }
}, {timestamps : true});

export const Note = mongoose.model("note",noteSchema);