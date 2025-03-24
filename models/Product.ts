import mongoose, { Schema } from "mongoose";

const schema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    main_description:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true,
    },
    price:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true,
     },
     explain:{
        type:String,
        required:true,
     },
     compound:{
        type:String,
        required:true,
     },
     bitterness:{
        type:String,
        required:true,
     },
     taste:{
        type:String,
        required:true,
     }

})

const model = mongoose.models.Product || mongoose.model("Product",schema)

export default model