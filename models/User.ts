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
        unique: true,
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
    role:{
      type: String,
        default : "USER",
    },
    refreshToken :String
});

const model = mongoose.models.User || mongoose.model('User', schema);

export default model