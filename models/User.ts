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
        validate: {
            validator: function(v: string) {
                return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v);
            },
            message: props => `${props.value} is not a valid email address!`
        }
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

export default model