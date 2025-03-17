import mongoose from "mongoose"

const schema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        minlength: 3
    },
    email:{
        type: String,
        required: true,
    },
    phone:{
        type: String,
        required : true,
    },
    password:{
        type: String,
        required:true,
        minlength: 8
    },
    refreshToken :String
});

const model = mongoose.models.User || mongoose.model('User', schema);

export model